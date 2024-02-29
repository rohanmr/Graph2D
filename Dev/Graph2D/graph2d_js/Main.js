var textFigure = null;
var canvas = null;
var label = null;
var line = null;
var lineX = null;
var lineY = null;
var circle = null;
var combinedFactories = [];
var factories1, factories2;
var totalCompareItems = 2;
var launchParameters;
var factoryTracker; // for undo redo feature
var resolvedLimitLineHeight;
var resolvedEfficiencyLineHeight;
let isDragging = false;
let isClick = false;
let clickTimeout;
let gLineIndex = 1;
let gFactoryIndex = 0;

// Create a Map
const jsonMap = new Map();

//
var demandTextBoxValue = "";
var efficiencyTextBoxValue = 0.5;
const TimeUnit = {
  MINUTE: 0.01666,
  HOUR: 0.00028,
  SECOND: 1,
};
let currentYUnit = TimeUnit.SECOND;
var limitLineHeight = 240 * currentYUnit;
var efficiencyHeight = limitLineHeight * efficiencyTextBoxValue * currentYUnit;
let innerInfoDiv;
let OperatorCount = 1;

let graphDrawOptions = {
  drawNormal: true,
  drawVA: false,
  drawInGroups: false,
};

let graphScenarioOptions = {
  normalScenario: true,
  compareScenario: false,
};

let viewTypeConst = {
  BASIC: 1,
  OPERATOR: 2,
};
let viewType = viewTypeConst.NORMAL;

// KPIs
let highestCombinedHeight = [0, 0];
let totalTimeOnAllStations = [0, 0];
var kpiDataMap = {
  "Bottleneck station cycle time": 50,
  "Count of stations/operator": 8,
  "Line Balancing Ratio": 1.35,
  "Available time per shift": 1,
  "Output/shift": 110,
  "# of Units/operator/shift": 25,
  "Productivity improvement": 0.12,
  "Operator Utilization": 80,
};
var kpiSecondaryDataMap = {
  "Bottleneck station cycle time": 50,
  "Count of stations/operator": 8,
  "Line Balancing Ratio": 1.35,
  "Available time per shift": 1,
  "Output/shift": 110,
  "# of Units/operator/shift": 25,
  "Productivity improvement": 0.12,
  "Operator Utilization": 80,
};

// ToDo tooltip code has to be move at common place
var customIcon = draw2d.shape.icon.Customer.extend({
  init: function (attr) {
    this._super(attr);
    this.icon = new draw2d.shape.icon.Customer({
      width: 20,
      height: 20,
      draggable: false,
    });
    this.on("mouseenter", (emitter) => {
      if (!isDragging) {
        this.showTooltip(emitter.userData);
      }
    });
    this.on("mouseleave", () => {
      this.hideTooltip();
    });
  },

  hideTooltip: function () {
    if (this.tooltip !== null) {
      this.tooltip.fadeOut(1, function () {
        $(this).remove();
      });
      this.tooltip = null;
    }
  },

  showTooltip: function (text) {
    //console.log(text)
    this.tooltip = $('<div class="tooltip">' + text + "</div>")
      .appendTo("body")
      .hide()
      .fadeIn(100);
    this.positionTooltip();
  },

  positionTooltip: function () {
    if (this.tooltip === null) {
      return;
    }
    var width = this.tooltip.outerWidth(true);
    var pos = this.canvas.fromCanvasToDocumentCoordinate(
      this.getAbsoluteX() + this.getWidth() / 2 - width / 2,
      this.getAbsoluteY() + this.getHeight() / 2
    );

    // remove the scrolling part from the tooltip because the tooltip is placed
    // inside the scrolling container
    pos.x += this.canvas.getScrollLeft();
    pos.y += this.canvas.getScrollTop();

    this.tooltip.css({ top: pos.y, left: pos.x });
  },
});

// Custom Image Icon shape
const CustomImageIcon = draw2d.shape.basic.Image.extend({
  NAME: "CustomIcon",
  init: function (attr) {
    this._super($.extend({ width: 20, height: 20 }, attr));
    this.setPath(attr.imagePath);
  },
});

var LabelRectangle = draw2d.shape.basic.Rectangle.extend({
  init: function (attr) {
    this._super(attr);

    // Create any Draw2D figure as decoration for the connection
    this.label = new draw2d.shape.basic.Label({
      text: attr.text,
      stroke: 0,
      color: "#0d0d0d",
      fontColor: "#0d0d0d",
      fontSize: 16,
      fontFamily: "Arial",
      bold: true,
    });

    // add the new decoration to the connection with a position locator.
    this.add(this.label, new draw2d.layout.locator.CenterLocator(this));
    this.label.installEditor(new draw2d.ui.LabelInplaceEditor());

    this.on("mousedown", function (emitter, event) {
      isDragging = false;
      isClick = true;

      clickTimeout = setTimeout(function () {
        isClick = false;
      }, 200); // Adjust the timeout duration as needed
    });

    this.on("mouseup", function (emitter, event) {
      clearTimeout(clickTimeout);
      if (!isDragging) {
        // Handle the click event
        //console.log("Clicked");
        if (typeof HighlightIn3DView !== "undefined") {
          HighlightIn3DView(emitter.id);
        }
      } else {
        // This function will be called when the figure's drag operation is completed
        //console.log("Ending drag operation", emitter.x, emitter.width);
        const operationID = emitter.id;
        const newCellId = searchForNumber(
          emitter.x,
          emitter.x + emitter.width,
          cellToXYMap
        );
        moveOperationToNewCell(operationID, newCellId);
        resetZoom();
        DrawGraph();
      }
      isClick = false;
      isDragging = false;
    });

    this.on("mouseenter", (emitter) => {
      if (!isDragging) {
        var text = "Name: " + emitter.userData.Name;
        text += "<br>Duration: " + emitter.userData.Duration;
        this.showTooltip(text);
      }
    });
    this.on("mouseleave", () => {
      this.hideTooltip();
    });
  },

  // Override the onDrag method to control the drag behavior of the figure
  onDrag: function (dx, dy, dx2, dy2, shiftKey, ctrlKey) {
    this.hideTooltip();
    // Call the _super method to perform the default drag behavior
    this._super(dx, dy, dx2, dy2, shiftKey, ctrlKey);
    isDragging = true;
    // Perform additional drag behavior here, if desired
    //console.log("Performing custom drag operation");
  },

  hideTooltip: function () {
    if (this.tooltip) {
      this.tooltip.fadeOut(1, function () {
        $(this).remove();
      });
      this.tooltip = null;
    }
  },

  showTooltip: function (text) {
    //console.log(text)
    this.tooltip = $('<div class="tooltip">' + text + "</div>")
      .appendTo("body")
      .hide()
      .fadeIn(100);
    this.positionTooltip();
  },

  positionTooltip: function () {
    if (this.tooltip === null) {
      return;
    }
    var width = this.tooltip.outerWidth(true);
    var pos = this.canvas.fromCanvasToDocumentCoordinate(
      this.getAbsoluteX() + this.getWidth() / 2 - width / 2 + 8,
      this.getAbsoluteY() + this.getHeight() / 2
    );

    // remove the scrolling part from the tooltip because the tooltip is placed
    // inside the scrolling container
    pos.x += this.canvas.getScrollLeft();
    pos.y += this.canvas.getScrollTop();

    this.tooltip.css({ top: pos.y, left: pos.x });
  },
});

//---------------------Utility functions Start-----------------// TODO move to separate files
// Reset zoom level
function resetZoom() {
  canvas.setZoom(1); // Set zoom level to 1 (default)
}
// Function to split text into multiple lines based on a maximum width
function getMultilineText(text, maxWidth) {
  const words = text.split(" ");
  let line = "";
  const lines = [];
  // Create a temporary canvas element
  const canvas = document.createElement("canvas");

  // Get the 2D rendering context
  const context = canvas.getContext("2d");

  // Set the font
  context.font = "16px Arial";
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const lineWidth = context.measureText(line + " " + word).width;
    if (lineWidth > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line += " " + word;
    }
  }
  lines.push(line);
  return lines.join("\n");
}

function searchForNumber(numX, numX2, myObj) {
  // Loop through each property in the object
  for (const key in myObj) {
    if (myObj.hasOwnProperty(key)) {
      const value = myObj[key];
      // Check if the num is within the x1 and x2 range of the current object property
      if (
        (numX >= value.value.x1 && numX <= value.value.x2) ||
        (numX2 >= value.value.x1 && numX2 <= value.value.x2)
      ) {
        // If so, return the key of the object property
        return value.key;
      }
    }
  }
  // If the num is not within any x1 and x2 range, return null
  return null;
}

function HighlightObjectUsingId(uniqueId) {
  const selectedLabel = findLabelById(uniqueId);
  if (selectedLabel) {
    selectedLabel.select();
  }
}

// Custom function to find a label by ID
function findLabelById(id) {
  const figures = canvas.getFigures();
  for (const figure of figures.data) {
    if (figure.getId().toLowerCase() === id.toLowerCase()) {
      return figure;
    }
  }
  return null;
}

function moveOperationToNewCell(operationUniqueId, newCellUniqueId) {
  if (!graphScenarioOptions.normalScenario) return;

  // Find the operation that you want to move based on its unique ID
  let operationToMove;
  let currentCell;
  let currentLine;
  let currentFactory;
  for (const factory of factories1) {
    for (const line of factory.Lines) {
      for (const cell of line.Cells) {
        for (const operation of cell.Operations) {
          if (operation.UniqueId === operationUniqueId) {
            operationToMove = operation;
            currentCell = cell;
            currentLine = line;
            currentFactory = factory;
            break;
          }
        }
        if (operationToMove) {
          break;
        }
      }
      if (operationToMove) {
        break;
      }
    }
    if (operationToMove) {
      break;
    }
  }

  // Find the new cell that you want to move the operation to based on its unique ID
  let newCell;
  let newLine;
  let newFactory;
  for (const factory of factories1) {
    for (const line of factory.Lines) {
      for (const cell of line.Cells) {
        if (cell.UniqueId === newCellUniqueId) {
          newCell = cell;
          newLine = line;
          newFactory = factory;
          break;
        }
      }
      if (newCell) {
        break;
      }
    }
    if (newCell) {
      break;
    }
  }

  if (!newCell) {
    console.error("Cell not found");
    return;
  }
  if (!operationToMove) {
    console.error("Operation or not found");
    return;
  }

  // Remove the operation from its current cell
  const index = currentCell.Operations.indexOf(operationToMove);
  currentCell.Operations.splice(index, 1);

  // Add the operation to the top of the new cell
  newCell.Operations.push(operationToMove); //.unshift(operationToMove);

  // Update the position of the operationToMove within the new cell
  //const position = newCell.Operations.indexOf(operationToMove) + 1;
  //operationToMove.Position = position;

  // Update the factories array with the new changes
  const currentCellIndex = currentLine.Cells.indexOf(currentCell);
  const newCellIndex = newLine.Cells.indexOf(newCell);
  currentLine.Cells[currentCellIndex] = currentCell;
  newLine.Cells[newCellIndex] = newCell;
  currentFactory.Lines[currentFactory.Lines.indexOf(currentLine)] = currentLine;
  newFactory.Lines[newFactory.Lines.indexOf(newLine)] = newLine;
  factories1[factories1.indexOf(currentFactory)] = currentFactory;
  factories1[factories1.indexOf(newFactory)] = newFactory;

  if (typeof MoveOperation !== "undefined") {
    //MoveOperation(currentCell.UniqueId, newCellUniqueId, operationUniqueId);
  }

  // Move operation from Cell 1 (UniqueId: 1) to Cell 2 (UniqueId: 2)
  const movedOperation = {
    operationUniqueId: operationUniqueId,
    sourceCellUniqueId: currentCell.UniqueId,
    destinationCellUniqueId: newCellUniqueId,
  };
  //console.log(`Moved operation ${operationUniqueId} from Cell ${currentCell.UniqueId} to Cell ${newCellUniqueId}`);

  // Update the factory data with new states
  const updatedData = factories1;
  if (!configuration.IS_SERVER)
    factoryTracker.updateState(updatedData, movedOperation);
}

function downloadImage(fileName, data) {
  // Create a new anchor element
  var downloadLink = document.createElement("a");

  // Set the href attribute to the PNG data
  downloadLink.href = data;

  // Set the download attribute with the desired file name
  downloadLink.setAttribute("download", fileName);

  // Trigger a click event on the anchor element to initiate the download
  downloadLink.click();
}
function getPNGDataOfCurrentView() {
  // convert the canvas into a PNG image source string
  var writer = new draw2d.io.png.Writer();
  writer.marshal(canvas, function (png) {
    console.log("Image Data", png);
    var fileName = "image.png";

    downloadImage(fileName, png);
    //return png;
    //$("#preview").attr("src", png);
  });
  return null;
}
function getJPGDataOfCurrentView() {
  // convert the canvas into a PNG image source string
  var writer = new draw2d.io.png.Writer();
  writer.marshal(canvas, function (png) {
    // Create a new Image object
    const image = new Image();

    // Set the source of the image to the PNG base64 data
    image.src = png;

    // Wait for the image to load
    image.onload = function () {
      // Create a temporary canvas element
      const canvasTemp = document.createElement("canvas");
      const ctxTemp = canvasTemp.getContext("2d");

      // Set the canvas dimensions to match the image
      canvasTemp.width = image.width;
      canvasTemp.height = image.height;
      // Fill the canvas with a white background color
      ctxTemp.fillStyle = "#ffffff"; // Set the desired background color
      ctxTemp.fillRect(0, 0, canvasTemp.width, canvasTemp.height);

      // Draw the PNG image on the temporary canvas
      ctxTemp.drawImage(image, 0, 0);

      // Convert the temporary canvas to a new base64 data URL as JPG
      const jpgBase64 = canvasTemp.toDataURL("image/jpeg");
      var fileName = "image.jpg";

      downloadImage(fileName, jpgBase64);
      // The jpgBase64 variable now contains the JPG image in base64 format

      // Use the converted JPG base64 image as needed
      console.log(jpgBase64);
    };
  });
  return null;
}

function refreshGraph() {
  reloadGraph();
}

function changeTimeUnitForY(unitInString) {
  limitLineHeight = limitLineHeight / currentYUnit;
  efficiencyHeight = efficiencyHeight / currentYUnit;

  if (unitInString === "Minute") currentYUnit = TimeUnit.MINUTE;
  else if (unitInString === "Hour") currentYUnit = TimeUnit.HOUR;
  else if (unitInString === "Second") currentYUnit = TimeUnit.SECOND;
  limitLineHeight = limitLineHeight * currentYUnit;

  efficiencyHeight = efficiencyHeight * currentYUnit;

  DrawGraph();
}

// Function to create the overlay div and table with dummy data
function createOverlayKPITable(container) {
  // Create the overlay div
  const overlay = document.createElement("div");
  // Hide the table by default
  overlay.style.display = "none";

  // Add close button to the overlay
  // Add event listener to the main div to close the overlay when clicked outside the table
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeKPITable();
    }
  });

  overlay.id = "overlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  overlay.style.zIndex = "9999";

  // Create the table
  const table = document.createElement("table");
  table.id = "kpi-data-table";
  table.style.position = "absolute";
  table.style.top = "50%";
  table.style.left = "50%";
  table.style.transform = "translate(-50%, -50%)";
  table.style.backgroundColor = "#fff";
  table.style.padding = "20px";
  table.style.borderRadius = "5px";
  table.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";

  // Table header
  const tableHead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Parameters", "Time(Min.)", "Compare Time(Min)"].forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);

  // Table body with dummy data
  const tableBody = document.createElement("tbody");
  const dummyData = [
    ["Bottleneck station cycle time", 45, 45],
    ["Count of stations/operator", 6, 6],
    ["Line Balancing Ratio", 1.23, 1.23],
    ["Available time per shift", 450, 450],
    ["Output/shift", 120, 120],
    ["# of Units/operator/shift", 20, 20],
    ["Productivity improvement", 0.15, 0.15],
    ["Operator Utilization", 85, 85],
  ];

  dummyData.forEach((data) => {
    const row = document.createElement("tr");
    data.forEach((item) => {
      const cell = document.createElement("td");
      cell.textContent = item;
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);

  // Add the table to the overlay div
  overlay.appendChild(table);

  // Add the overlay div to the body
  container.appendChild(overlay);
}

// Function to update the table data for the "Time(Min.)" column
function updateKPITableData(timeDataMap, kpiSecondaryDataMap = undefined) {
  kpiDataMap["Output/shift"] = Math.floor(
    kpiDataMap["Available time per shift"] /
      kpiDataMap["Bottleneck station cycle time"]
  );
  kpiDataMap["# of Units/operator/shift"] =
    kpiDataMap["Output/shift"] / kpiDataMap["Count of stations/operator"];

  kpiSecondaryDataMap["Output/shift"] = Math.floor(
    kpiSecondaryDataMap["Available time per shift"] /
      kpiSecondaryDataMap["Bottleneck station cycle time"]
  );
  kpiSecondaryDataMap["# of Units/operator/shift"] =
    kpiSecondaryDataMap["Output/shift"] /
    kpiSecondaryDataMap["Count of stations/operator"];

  const tableBody = document.querySelector("#kpi-data-table tbody");
  const rows = tableBody.querySelectorAll("tr"); // Leave the last row with the "Close" button

  // Validate the number of time values
  if (Object.keys(timeDataMap).length !== rows.length) {
    console.error(
      "Number of time values does not match the number of rows in the table."
    );
    return;
  }

  // Update the table with the new time values
  rows.forEach((row) => {
    const parameter = row.querySelector("td:first-child").textContent;
    if (timeDataMap.hasOwnProperty(parameter)) {
      const timeCell = row.querySelector("td:nth-child(2)");
      timeCell.textContent = timeDataMap[parameter];

      if (kpiSecondaryDataMap.hasOwnProperty(parameter)) {
        const secondaryCell = row.querySelector("td:nth-child(3)"); // Select the third column
        secondaryCell.textContent = kpiSecondaryDataMap[parameter];
      }
    }
  });
}

function createButton(buttonData, container) {
  // Create buttons dynamically
  buttonData.forEach(function (data) {
    var button = document.createElement("button");
    button.innerHTML = data.label;
    button.classList.add("custom_button");
    button.addEventListener("click", data.handler);
    button.style.marginLeft = "5px";
    button.style.position = "relative";
    button.title = data.tooltip; // Set the tooltip text
    container.appendChild(button);
  });
}

function createCombo(
  options,
  buttonContainer,
  callback_change,
  id = "",
  callback_click = undefined
) {
  // Create a select element
  var select = document.createElement("select");
  select.id = id;
  select.style.position = "relative";
  select.classList.add("custom_button");
  select.style.backgroundColor = "white";
  options.forEach(function (optionText) {
    var option = document.createElement("option");
    option.style.position = "relative";
    option.text = optionText;
    select.appendChild(option);
  });
  select.selectedIndex = 0;
  buttonContainer.appendChild(select);

  // Simulate click event to open the combo box on click
  select.addEventListener("mousedown", function (event) {
    event.stopPropagation();
  });

  // Event listener for change event
  if (callback_change) {
    select.addEventListener("change", function () {
      var selectedOption = select.options[select.selectedIndex];
      var shouldKeepValue = callback_change(
        selectedOption.text,
        select.selectedIndex
      );

      if (shouldKeepValue === false) {
        // Restore the previous selected option
        select.selectedIndex = select._prevIndex;
      } else {
        // Update the previous selected option index
        select._prevIndex = select.selectedIndex;
      }
    });
  }
  if (callback_click) {
    select.addEventListener("click", function () {
      var selectedOption = select.options[select.selectedIndex];
      var shouldKeepValue = callback_click(
        selectedOption.text,
        select.selectedIndex
      );

      if (shouldKeepValue === false) {
        // Restore the previous selected option
        select.selectedIndex = select._prevIndex;
      } else {
        // Update the previous selected option index
        select._prevIndex = select.selectedIndex;
      }
    });
  }

  // Initialize the _prevIndex property
  select._prevIndex = select.selectedIndex;
}

function createMultiSelectCombo(
  options,
  buttonContainer,
  callback_change,
  id = "",
  callback_click = undefined
) {
  // Create a select element with multiple attribute
  var select = document.createElement("select");
  select.id = id;
  select.style.position = "relative";
  // select.classList.add("custom_button");
  select.style.backgroundColor = "white";
  select.multiple = true; // Allow multiple selections

  options.forEach(function (optionText) {
    var option = document.createElement("option");
    option.style.position = "relative";
    option.text = optionText;
    select.appendChild(option);
  });

  buttonContainer.appendChild(select);

  // Simulate click event to open the combo box on click
  select.addEventListener("mousedown", function (event) {
    event.stopPropagation();
  });

  // Event listener for change event
  if (callback_change) {
    select.addEventListener("change", function () {
      var selectedOptions = Array.from(select.selectedOptions);
      var shouldKeepValue = callback_change(
        selectedOptions.map((option) => option.text),
        selectedOptions.map((option) => option.index)
      );

      if (shouldKeepValue === false) {
        // Restore the previous selected options
        selectedOptions.forEach((option) => (option.selected = false));
      }
    });
  }

  // Event listener for click event
  if (callback_click) {
    select.addEventListener("click", function () {
      var selectedOptions = Array.from(select.selectedOptions);
      var shouldKeepValue = callback_click(
        selectedOptions.map((option) => option.text),
        selectedOptions.map((option) => option.index)
      );

      if (shouldKeepValue === false) {
        // Restore the previous selected options
        selectedOptions.forEach((option) => (option.selected = false));
      }
    });
  }
}

function addOptionsToComboBox(comboId, optionsArray) {
  var select = document.getElementById(comboId);

  // Clear existing options
  select.innerHTML = "";

  // Add new options from the array
  optionsArray.forEach(function (option) {
    var newOption = document.createElement("option");
    newOption.value = option;
    newOption.text = option;
    select.appendChild(newOption);
  });
}

function createZoomButtons(zoomBtnContainer) {
  var zoomOutButton = document.createElement("div");
  zoomOutButton.id = "zoom-out";
  zoomOutButton.className = "zoom-button";
  zoomOutButton.innerHTML = '<i class="fas fa-search-minus"></i>';

  zoomOutButton.addEventListener("click", function () {
    //console.log("zooming out");
    canvas.setZoom(canvas.getZoom() * 1.1); // Increase zoom level by 10%
  });
  zoomBtnContainer.appendChild(zoomOutButton);

  var zoomInButton = document.createElement("div");
  zoomInButton.id = "zoom-in";
  zoomInButton.className = "zoom-button";
  zoomInButton.innerHTML = '<i class="fa fa-search-plus"></i>';

  zoomInButton.addEventListener("click", function () {
    //console.log("zooming in");
    canvas.setZoom(canvas.getZoom() * 0.9); // Decrease zoom level by 10%
  });
  zoomBtnContainer.appendChild(zoomInButton);
}

function updateLimitLine() {
  limitLineHeight =
    demandTextBoxValue / Number(kpiDataMap["Available time per shift"]);
  efficiencyHeight = limitLineHeight * efficiencyTextBoxValue;
  DrawGraph();
}

function createTextBox(container) {}

function createUI() {
  const canvasContainer = document.getElementById(
    "mpmLoadBalancingDisplayPanel_canvas"
  );

  var linkElement1 = document.createElement("link");
  linkElement1.type = "text/css";
  linkElement1.rel = "stylesheet";

  if (!configuration.IS_SERVER) linkElement1.href = "css/linebalance.css";
  else
    linkElement1.href =
      "netmarkets/javascript/linebalance/Graph2D_Agmntx/Dev/Graph2D/css/linebalance.css";

  var linkElement2 = document.createElement("link");
  linkElement2.rel = "stylesheet";
  linkElement2.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";

  var linkElement3 = document.createElement("link");
  linkElement3.rel = "stylesheet";
  linkElement3.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

  canvasContainer.appendChild(linkElement1);
  canvasContainer.appendChild(linkElement2);
  canvasContainer.appendChild(linkElement3);

  const buttonContainer = document.createElement("div");
  buttonContainer.style.position = "absolute";
  buttonContainer.id = "buttoncontainer_id";

  createTextBox(buttonContainer);

  // Define an array of button data

  //Time Unit Combo
  var timeUnitOptions = ["Second", "Minute", "Hour"]; // Replace with your desired options

  addOptionsToComboBoxDiv(
    "dropdown_menu_timer",
    timeUnitOptions,
    function (selectedValue) {
      console.log("Time Unit selected:", selectedValue);
      changeTimeUnitForY(selectedValue);
    }
  );
  //Export Label

  //Export Combo
  var exportOptions = ["PNG", "JPG"]; // Replace with your desired options

  addOptionsToComboBoxDiv(
    "dropdown_menu",
    exportOptions,
    function (selectedValue) {
      console.log("Export selected:", selectedValue);
      if (selectedValue == "PNG") getPNGDataOfCurrentView();
      else getJPGDataOfCurrentView();
    }
  );

  var graphOptions = [20, 40, 60, 80, 100, 200]; // Replace with your desired options

  // View VA Group Normal
  var graphOptions = ["Normal", "Normal+VA", "Normal+VA+Group"]; // Replace with your desired options

  addOptionsToComboBoxDiv(
    "dropdown_menu_normal",
    graphOptions,
    function (selectedValue) {
      console.log("Selected graph:", selectedValue);
      graphDrawOptions = { drawNormal: false, drawVA: false };
      if (selectedValue == "Normal") {
        graphDrawOptions.drawNormal = true;
      } else if (selectedValue == "Normal+VA") {
        graphDrawOptions.drawNormal = true;
        graphDrawOptions.drawVA = true;
      } else if (selectedValue == "Normal+VA+Group") {
        graphDrawOptions.drawNormal = true;
        graphDrawOptions.drawVA = true;
        graphDrawOptions.drawInGroups = true;
      }

      DrawGraph();
    },
    "label-Normal"
  );

  // Compare scenario
  getAdditionalJsonsArray()
    .then((docIdArray) => {
      // Handle the result here
      console.log("Result:", docIdArray);

      addOptionsToComboBoxDiv(
        "dropdown_menu_compare",
        docIdArray,
        function (selectedValue) {
          console.log("Selected graph:", selectedValue);
          prepareAndRenderGraphData([selectedValue]);
        }
      );
      addInputsToComboBoxDiv(
        "dropdown_menu_compare",
        docIdArray,
        "checkboxname",
        function () {
          var array = [];
          var checkboxes = document.querySelectorAll(
            "input[name=checkboxName]:checked"
          );

          for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value);
          }

          prepareAndRenderGraphData(array);
        }
      );
      // Update Doc

      addOptionsToComboBoxDiv(
        "dropdown_menu_update",
        docIdArray,
        function (selectedValue) {
          console.log("Selected doc id:", selectedValue);
          saveUpdatedDataToJson(selectedValue);
        }
      );
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error in getAdditionalJsonsArray:", error);
    });

  graphOptions = ["Basic", "Operator"]; // Replace with your desired options

  addOptionsToComboBoxDiv(
    "dropdown_menu_operator",
    graphOptions,
    function (selectedValue) {
      console.log("Selected viewType:", selectedValue);

      if (selectedValue == "Basic") {
        viewType = viewTypeConst.BASIC;
        DrawGraph();
      } else if (selectedValue == "Operator") {
        if (graphScenarioOptions.compareScenario) {
          //alert("Operator view not available for compare scenario.");
          //return false;
        }

        viewType = viewTypeConst.OPERATOR;
        DrawGraph();
      }
    },
    "label-Operator"
  );

  //New operator addition
  graphOptions = [];

  //New operator addition
  graphOptions = [];

  createSidePanelKPITable();
  //Zoom buttons
  var zoomBtnContainer = document.createElement("zoomBtn");
  createZoomButtons(zoomBtnContainer);

  canvasContainer.appendChild(buttonContainer);
  canvasContainer.appendChild(zoomBtnContainer);
}

function setDefaultStyles(element) {
  element.style.position = "absolute";
  element.style.top = "0";
  element.style.right = "0";
  element.style.width = "250px";
  element.style.height = "100px";
  element.style.wordWrap = "break-word";
  element.style.display = "none";
}

function showKPITable() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
}
function closeKPITable() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

function customUndo() {
  console.log("undoButton Clicked");
  tempFactories = factoryTracker.undo();
  if (tempFactories) {
    factories1 = tempFactories;
    DrawGraph();
    // Access moved operation information during undo/redo
    const currentState =
      factoryTracker.states[factoryTracker.currentStateIndex + 1];
    if (currentState.movedOperation) {
      const { operationUniqueId, sourceCellUniqueId, destinationCellUniqueId } =
        currentState.movedOperation;
      console.log(
        `Moved operation ${operationUniqueId} from Cell ${sourceCellUniqueId} to Cell ${destinationCellUniqueId}`
      );
      if (typeof MoveOperation !== "undefined") {
        MoveOperation(
          destinationCellUniqueId,
          sourceCellUniqueId,
          operationUniqueId
        );
      }
    }
  }
}
function customRedo() {
  console.log("redoButton Clicked");
  tempFactories = factoryTracker.redo();
  if (tempFactories) {
    factories1 = tempFactories;
    DrawGraph();
    // Access moved operation information during undo/redo
    const currentState =
      factoryTracker.states[factoryTracker.currentStateIndex];
    if (currentState.movedOperation) {
      const { operationUniqueId, sourceCellUniqueId, destinationCellUniqueId } =
        currentState.movedOperation;
      console.log(
        `Moved operation ${operationUniqueId} from Cell ${sourceCellUniqueId} to Cell ${destinationCellUniqueId}`
      );
      if (typeof MoveOperation !== "undefined") {
        MoveOperation(
          sourceCellUniqueId,
          destinationCellUniqueId,
          operationUniqueId
        );
      }
    }
  }
}

function getTextWidth(inputText) {
  var tempCanvas = document.createElement("canvas");
  var context = tempCanvas.getContext("2d");

  // Measure the width of the text
  var textWidth = context.measureText(inputText).width;
  //console.log("Text width:", textWidth);
  return textWidth;
}

function getTruncatedText(inputText, maxWidth) {
  var tempCanvas = document.createElement("canvas");
  var context = tempCanvas.getContext("2d");

  // Measure the width of the whole inputText
  var totalTextWidth = context.measureText(inputText).width;

  // If the whole text fits within the maxWidth, return the full inputText
  if (totalTextWidth <= maxWidth) {
    console.log("Text width:", totalTextWidth);
    return inputText;
  }

  // Binary search to find the maximum substring from the end that fits within the maxWidth
  var left = 0;
  var right = inputText.length - 1;
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    var substring = inputText.slice(mid);
    var substringWidth = context.measureText(substring).width;

    if (substringWidth <= maxWidth) {
      // If the current substring fits, try to extend it further to the left
      right = mid - 1;
    } else {
      // If the current substring is too wide, try a shorter substring to the right
      left = mid + 1;
    }
  }

  // Return the substring that fits within the maxWidth
  var result = inputText.slice(left);
  //console.log("Text width:", context.measureText(result).width);
  return result;
}

//---------------------Utility functions End-----------------// TODO move to separate files

function resizeCanvas() {
  var svgElement = document.querySelector("svg");
  if (svgElement) {
    svgElement.setAttribute("width", canvas.getWidth());
    svgElement.setAttribute("height", canvas.getHeight());
  }
}

function dataToRender(factoryIdx, lineIdx) {
  if (combinedFactories.length < factoryIdx + 1)
    console.log("Invalid factory index");
  else if (combinedFactories[factoryIdx].Lines.length < lineIdx + 1)
    console.log("Invalid factory index");
  else {
    gFactoryIndex = factoryIdx;
    gLineIndex = lineIdx;
    DrawGraph();
  }
}

function jsonToStructure(jsonString) {
  const data = JSON.parse(jsonString);

  return data.Factories.map(
    (f) =>
      new Factory(
        f.VersionId,
        f.UniqueId,
        f.VariantId,
        f.Name,
        f.Lines.map(
          (l) =>
            new Line(
              l.VersionId,
              l.UniqueId,
              l.VariantId,
              l.Cells.map(
                (c) =>
                  new Cell(
                    c.VersionId,
                    c.UniqueId,
                    c.VariantId,
                    c.Operations.map(
                      (o) =>
                        new Operation(
                          o.VersionId,
                          o.Activities,
                          o.UniqueId,
                          o.Type,
                          o.TargetParts.map(
                            (p) =>
                              new TargetPart(
                                p.VersionId,
                                p.UniqueId,
                                p.WcNumber,
                                p.VariantId,
                                p.Name
                              )
                          ),
                          o.WalkDistance,
                          o.TargetTools.map(
                            (t) =>
                              new TargetTool(
                                t.UniqueId,
                                t.isMonumental,
                                t.WcNumber,
                                t.Name
                              )
                          ),
                          o.Duration,
                          o.VariantId,
                          o.TargetWorkers,
                          o.Name,
                          o.SVA,
                          o.NVA,
                          o.VA
                        )
                    ),
                    c.Name
                  )
              ),
              l.Name
            )
        ),
        data.LaunchParameters
      )
  );
}

function structureToJson(data) {
  if (Array.isArray(data)) {
    return data.map((item) => structureToJson(item));
  } else if (data !== null && typeof data === "object") {
    if (data instanceof Factory) {
      return {
        VersionId: data.VersionId,
        UniqueId: data.UniqueId,
        VariantId: data.VariantId,
        Name: data.Name,
        Lines: structureToJson(data.Lines),
      };
    } else if (data instanceof Line) {
      return {
        VersionId: data.VersionId,
        UniqueId: data.UniqueId,
        VariantId: data.VariantId,
        Name: data.Name,
        Cells: structureToJson(data.Cells),
      };
    } else if (data instanceof Cell) {
      return {
        VersionId: data.VersionId,
        UniqueId: data.UniqueId,
        VariantId: data.VariantId,
        Name: data.Name,
        Operations: structureToJson(data.Operations),
      };
    } else if (data instanceof Operation) {
      return {
        VersionId: data.VersionId,
        Activities: data.Activities,
        UniqueId: data.UniqueId,
        Type: data.Type,
        TargetParts: structureToJson(data.TargetParts),
        WalkDistance: data.WalkDistance,
        TargetTools: structureToJson(data.TargetTools),
        Duration: data.Duration,
        VariantId: data.VariantId,
        TargetWorkers: data.TargetWorkers,
        Name: data.Name,
        SVA: data.SVA,
        NVA: data.NVA,
        VA: data.VA,
      };
    } else if (data instanceof TargetPart) {
      return {
        VersionId: data.VersionId,
        UniqueId: data.UniqueId,
        WcNumber: data.WcNumber,
        VariantId: data.VariantId,
        Name: data.Name,
      };
    } else if (data instanceof TargetTool) {
      return {
        UniqueId: data.UniqueId,
        isMonumental: data.isMonumental,
        WcNumber: data.WcNumber,
        Name: data.Name,
      };
    } else if (data instanceof LaunchParameters) {
      return {
        plantOid: data.plantOid,
        wcServerURL: data.wcServerURL,
        processPlanId: data.processPlanId,
        containerId: data.containerId,
        processPlanNavigationCriteriaId: data.processPlanNavigationCriteriaId,
      };
    }
  }
  return data;
}

function getJsonFromStructure(data) {
  const jsonData = structureToJson(data); // Assuming 'data' is your structure

  // Add the missing 'Factories' and 'LaunchParameters'
  const finalData = {
    Factories: jsonData,
    LaunchParameters: launchParameters, // Assuming there is one set of LaunchParameters
  };
  return JSON.stringify(finalData);
}

function saveUpdatedDataToJson(wtdocOid = null) {
  if (typeof _SaveUpdatedData !== "undefined") {
    const updatedJsonString = getJsonFromStructure(factories1);
    _SaveUpdatedData(
      updatedJsonString,
      launchParameters.processPlanId,
      launchParameters.containerId,
      wtdocOid
    );

    getAdditionalJsonsArray()
      .then((docIdArray) => {
        // Handle the result here
        console.log("Result:", docIdArray);
        addOptionsToComboBox("combo_id_compare", docIdArray);
        addOptionsToComboBox("combo_id_update_documents", docIdArray);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error in getAdditionalJsonsArray:", error);
      });
  }
}

function getAdditionalJsonsArray() {
  if (
    configuration.IS_SERVER &&
    typeof _GetAdditionalJsonsArray !== "undefined"
  ) {
    // Store the first element
    const firstEntry = jsonMap.entries().next().value;

    // Clear the Map
    jsonMap.clear();

    // Set the first element back into the Map
    if (firstEntry) {
      jsonMap.set(firstEntry[0], firstEntry[1]);
    }

    return _GetAdditionalJsonsArray()
      .then((jsonData) => {
        if (jsonData !== null) {
          // Handle the JSON data here
          const docIdArray = jsonData.map((data) => data.docOid);
          console.log("Received saved JSON data at main:", jsonData);
          // Add entries to the map
          docIdArray.forEach((docId) => {
            _GetAdditionalJsons(docId)
              .then((jsonData) => {
                if (jsonData !== null) {
                  // Handle the JSON data here
                  console.log("Received JSON data at main:", jsonData);
                  jsonMap.set(docId, jsonData);
                } else {
                  // Handle the case where the array is empty
                  console.log("The array is empty.");
                }
              })
              .catch((error) => {
                // Handle errors here
                console.error("Error while fetching additional JSON:", error);
              });
          });
          return docIdArray;
        } else {
          // Handle the case where the array is empty
          console.log("The array is empty.");
          return ["None", "Compare"];
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error while fetching additional JSON:", error);
        throw error; // Re-throw the error to propagate it
      });
  } else {
    return Promise.resolve(Array.from(jsonMap.keys()));
  }
}

// Delete this: deprecated
// function getAdditionalJsons(docId) {

//     if (configuration.IS_SERVER && typeof _GetAdditionalJsons !== "undefined") {

//         _GetAdditionalJsons(docId)
//             .then(jsonData => {
//                 if (jsonData !== null) {
//                     // Handle the JSON data here
//                     console.log("Received JSON data at main:", jsonData);
//                     CompareGraph(jsonData);
//                 } else {
//                     // Handle the case where the array is empty
//                     console.log("The array is empty.");
//                 }
//             })
//             .catch(error => {
//                 // Handle errors here
//                 console.error("Error while fetching additional JSON:", error);
//             });
//     }
//     else {
//         prepareAndRenderGraphData(docId);
//     }
// }

function renameOperator(fromLineIndex, fromOperatorIndex, newOperatorName) {
  const existingCell =
    factories1[gFactoryIndex].Lines[fromLineIndex].Cells[fromOperatorIndex];
  existingCell.OperatorName = newOperatorName;
  DrawGraph();
}

function addNewOperatorCumCell(lineIndex) {
  const newCell = new Cell(
    "VersionId",
    "UniqueId" + OperatorCount,
    "VariantId",
    [],
    "NewStation",
    0,
    "Operator" + OperatorCount
  );
  OperatorCount++;
  //newCell.Operator = "NewOperator";
  factories1[gFactoryIndex].Lines[lineIndex].Cells.push(newCell);
  DrawGraph();
}

function addNewOperatorCumCellAfterCell(prevCellIndex) {
  const newCell = new Cell(
    "VersionId",
    "UniqueId" + OperatorCount,
    "VariantId",
    [],
    "NewStation",
    0,
    "Operator" + OperatorCount
  );
  OperatorCount++;
  var factory = factories1[gFactoryIndex];

  for (var lineIndex = 0; lineIndex < factory.Lines.length; lineIndex++) {
    var line = factory.Lines[lineIndex];

    // Check if the cellNumber is within the valid range for this line
    if (prevCellIndex >= 0 && prevCellIndex < line.Cells.length) {
      // Insert the newCell after the specified index
      //newCell.OperatorName = line.Cells[prevCellIndex].OperatorName ? line.Cells[prevCellIndex].OperatorName : newCell.OperatorName;
      newCell.Name = line.Cells[prevCellIndex].Name
        ? line.Cells[prevCellIndex].Name
        : newCell.Name;
      line.Cells.splice(prevCellIndex + 1, 0, newCell);
      DrawGraph();
      return; // Exit the loop once the cell is inserted
    }

    // If the cell is not found in this line, continue to the next line
    prevCellIndex -= line.Cells.length;
  }
}

function addExistingOperatorCumCell(
  fromLineIndex,
  fromCellIndex,
  toLineIndex,
  toStationIndex
) {
  const existingCell =
    factories1[gFactoryIndex].Lines[fromLineIndex].Cells[fromCellIndex];

  // Create a deep copy of existingCell with empty copiedOperations
  const deepCopyOfCell = existingCell.deepCopy();
  deepCopyOfCell.UniqueId = deepCopyOfCell.UniqueId + "_Cloned";
  // Calculate the combined duration of operations and create a new operation
  const combinedDuration = existingCell.calculateCombinedDuration();
  const newOperation = new Operation(
    "",
    "",
    "Reserved", // provide a new uniqueId if needed
    "",
    [],
    0,
    [],
    combinedDuration,
    "",
    [],
    "",
    0,
    0,
    0,
    true //IsReserved
  );

  deepCopyOfCell.Operations.push(newOperation);
  const toStation =
    factories1[gFactoryIndex].Lines[toLineIndex].Cells[toStationIndex];
  deepCopyOfCell.Name = toStation.Name;
  factories1[gFactoryIndex].Lines[toLineIndex].Cells.splice(
    toStationIndex + 1,
    0,
    deepCopyOfCell
  ); //[toStationIndex].push(deepCopyOfCell);
  DrawGraph();
}

//---------------------Core functions start---------------//
// comparejson argument is only for testing purpose. At server it will b fetch from API
function initGraph(json, compareJson = undefined, compareJson2 = undefined) {
  // create the canvas for the user interaction
  // Add entries to the map
  jsonMap.set("Current", jsonToStructure(json));
  if (!configuration.IS_SERVER) {
    jsonMap.set("Json2", jsonToStructure(compareJson));
    jsonMap.set("Json3", jsonToStructure(json));
  }

  if (!canvas) {
    canvas = new draw2d.Canvas("mpmLoadBalancingDisplayPanel_canvas");
    createUI();
  }
  //window.addEventListener('resize', resizeCanvas);
  canvas.installEditPolicy(new draw2d.policy.canvas.FadeoutDecorationPolicy());
  //canvas.installEditPolicy(new draw2d.policy.canvas.SnapToGridEditPolicy())

  // Map the data to classes
  factories1 = jsonToStructure(json);
  // TODO optimize it. Already doing json.parse in jsonToStrcture
  const data = JSON.parse(json);
  launchParameters = data.LaunchParameters;

  factories2 = null;
  // Map the data to classes
  if (compareJson) {
    factories2 = jsonToStructure(compareJson);
  }

  //factories = factories1;
  factoryTracker = new FactoryTracker(factories1);
  DrawGraph();
}

// Deprecated. Remove if no use after sometime.
function CompareGraph(compareJson = undefined) {
  combinedFactories = [];
  if (compareJson) {
    factories2 = jsonToStructure(compareJson);
  }
  if (!factories2) {
    console.log("No compare data found");
  } else {
    for (let i = 0; i < factories1.length; i++) {
      const factory1 = factories1[i];
      const factory2 = factories2[i];
      const combinedLines = [];

      for (let j = 0; j < factory1.Lines.length; j++) {
        const lines1 = factory1.Lines[j];
        const lines2 = factory2.Lines[j];
        const combinedCells = [];

        for (let k = 0; k < lines1.Cells.length; k++) {
          combinedCells.push(lines1.Cells[k]);
          combinedCells.push(lines2.Cells[k]);
        }

        const combinedLine = new Line(
          lines1.VersionId,
          lines1.UniqueId,
          lines1.VariantId,
          combinedCells,
          lines1.Name
        );

        combinedLines.push(combinedLine);
      }

      const combinedFactory = new Factory(
        factory1.VersionId,
        factory1.UniqueId,
        factory1.VariantId,
        factory1.Name,
        combinedLines,
        factory1.Name,
        factory1.LaunchParameters
      );

      combinedFactories.push(combinedFactory);
    }
  }
  DrawGraph();
}

function isUniqOperatorForLine(lineIdx, operatorName) {
  const line = factories1[0].Lines[lineIdx];

  for (const cell of line.Cells) {
    if (cell.OperatorName === operatorName) {
      return false;
    }
  }

  return true;
}

function prepareAndRenderGraphData(selectedItems) {
  // Clear existing factories in combinedFactories array
  combinedFactories.length = 0;

  // Initialize the source factories array
  let sourceFactories = [];

  // Populate sourceFactories array based on selectedItems
  selectedItems.forEach((item) => {
    console.log(item);
    if (jsonMap.has(item)) {
      sourceFactories.push(jsonMap.get(item));
    } else {
      console.log(`${item} not found in jsonMap`);
    }
  });

  for (let sourceIndex = 0; sourceIndex < factories1.length; sourceIndex++) {
    // Initialize an array to store combined lines for the current factory
    var combinedLines = [];

    // Iterate over each line in the first factory of the source factories
    for (
      let lineIndex = 0;
      lineIndex < sourceFactories[0][0].Lines.length;
      lineIndex++
    ) {
      // Initialize an array to store combined cells for the current line
      var combinedCells = [];

      // Extract lines from all source factories at the current line index
      var lines = sourceFactories.map((factory) => factory[0].Lines[lineIndex]);

      // Iterate over each cell in the first line to combine cells from all source factories
      for (let cellIndex = 0; cellIndex < lines[0].Cells.length; cellIndex++) {
        // Combine cells at the current cell index from all lines
        for (let idx = 0; idx < sourceFactories.length; ++idx) {
          if (idx > 0) {
            lines[idx].Cells[cellIndex].IsCompare = true;
          }
          combinedCells.push(lines[idx].Cells[cellIndex]);
        }
      }

      // Create a combined line using the first line's metadata and the combined cells
      const combinedLine = new Line(
        lines[0].VersionId,
        lines[0].UniqueId,
        lines[0].VariantId,
        combinedCells,
        lines[0].Name
      );

      // Add the combined line to the array of combined lines
      combinedLines.push(combinedLine);
    }

    // Create a combined factory using the metadata from the first factory and the combined lines
    const combinedFactory = new Factory(
      sourceFactories[0][0].VersionId,
      sourceFactories[0][0].UniqueId,
      sourceFactories[0][0].VariantId,
      sourceFactories[0][0].Name,
      combinedLines,
      sourceFactories[0][0].Name,
      sourceFactories[0][0].LaunchParameters
    );

    if (selectedItems.length > 1) {
      // Set the compareScenario option to true
      graphScenarioOptions.compareScenario = true;
    }

    // Add the combined factory to the array of combined factories
    combinedFactories.push(combinedFactory);
  }

  totalCompareItems = sourceFactories.length;
  DrawGraph();
}

function enableEditTextBox(operatorTextShape) {
  // Get the current position of the Text shape
  let position = operatorTextShape.getPosition();

  // Hide the Text shape
  operatorTextShape.setVisible(false);

  // Create an input field dynamically
  let inputField = document.createElement("input");
  inputField.type = "text";
  inputField.value = operatorTextShape.getText(); // Set the initial value
  inputField.style.position = "absolute";
  inputField.style.left = position.x + "px";
  inputField.style.top = position.y + "px";
  inputField.style.width = "125px";
  inputField.style.fontSize = "16px";
  inputField.style.fontFamily = "Arial";
  inputField.style.fontWeight = "bold";

  // Append the input field to the document body
  document.body.appendChild(inputField);

  // Focus on the input field
  inputField.focus();

  // Handle blur event to save changes and show the Text shape again
  // inputField.addEventListener("blur", function () {
  //     updateText();
  // });

  // Handle "Enter" key press to save changes and show the Text shape again
  inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default "Enter" behavior (e.g., form submission)
      updateText();
    }
  });

  function updateText() {
    renameOperator(
      operatorTextShape.userData.lineIdx,
      operatorTextShape.userData.operatorIdx,
      inputField.value
    );
    operatorTextShape.setText(inputField.value);
    operatorTextShape.setVisible(true);
    document.body.removeChild(inputField);
  }
}

//---------------------Core functions start---------------//

function DrawGraph() {
  const isValidCompareScenario =
    graphScenarioOptions.compareScenario && combinedFactories.length > 0;
  if (isValidCompareScenario) {
    //    viewType = viewTypeConst.BASIC;
  }

  factories = factories1;
  if (combinedFactories.length) factories = combinedFactories;

  let OperatorName = "Operator_";

  // for operator view adjust y position of all attributes
  if (viewType == viewTypeConst.OPERATOR) {
    myConstants.START_Y = 490;
    POSITIONS.STATION_TEXT_Y_POS = myConstants.START_Y + 100;
    POSITIONS.STATION_ICON_Y_POS = myConstants.START_Y + 125;
    POSITIONS.SATURATION_TEXT_Y_POS = myConstants.START_Y + 65; // NO change
    POSITIONS.WORK_ZONE_TEXT_Y_POS = myConstants.START_Y + 155;
    POSITIONS.OPERATOR_TEXT_Y_POS = myConstants.START_Y + 10; // station becomes operator
    POSITIONS.OPERATOR_ICON_Y_POS = myConstants.START_Y + 35; // station becomes operator

    // Add New Operator combobox
    var linesArray = factories[gFactoryIndex].Lines;
    // Use map to extract the 'name' property from each Lines object
    var graphOptions = linesArray.map(function (line) {
      return line.Name;
    });
    graphOptions.unshift("Choose Line");

    addOptionsToComboBoxDiv(
      "dropdown_menu_address",
      graphOptions,
      function (selectedValue, selectedIndex) {
        addNewOperatorCumCell(graphOptions.indexOf(selectedValue) - 1);
      }
    );

    var cellNamesArray = [].concat(
      ...linesArray.map((line) => line.Cells.map((cell) => cell.Name))
    );
    cellNamesArray.unshift("Choose Station");

    addOptionsToComboBoxDiv(
      "dropdown_menu_user",
      cellNamesArray,
      function (selectedValue, selectedIndex) {
        addNewOperatorCumCellAfterCell(
          cellNamesArray.indexOf(selectedValue) - 1
        );
      }
    );
    // Add New Operator combobox!
  } else {
    myConstants.START_Y = 560;
    POSITIONS.STATION_TEXT_Y_POS = myConstants.START_Y + 10;
    POSITIONS.STATION_ICON_Y_POS = myConstants.START_Y + 35;
    POSITIONS.SATURATION_TEXT_Y_POS = myConstants.START_Y + 65; // NO change
    POSITIONS.WORK_ZONE_TEXT_Y_POS = myConstants.START_Y + 98;
    POSITIONS.OPERATOR_TEXT_Y_POS = myConstants.START_Y + 10; // station becomes operator
    POSITIONS.OPERATOR_ICON_Y_POS = myConstants.START_Y + 35; // station becomes operator
  }

  // Clear the canvas
  canvas.clear();
  cellToXYMap = [];
  stationToXYMap = [];

  // Graph x y line
  lineY = new draw2d.shape.basic.Line({
    startX: myConstants.START_X,
    startY: myConstants.START_Y,
    endX: myConstants.START_X,
    endY: myConstants.END_Y,
    selectable: false,
    draggable: false,
  });
  lineX = new draw2d.shape.basic.Line({
    startX: myConstants.START_X,
    startY: myConstants.START_Y,
    endX: myConstants.END_X,
    endY: myConstants.START_Y,
    selectable: false,
    draggable: false,
  });

  canvas.add(lineX);
  canvas.add(lineY);

  let saturationTitle = new draw2d.shape.basic.Text({
    text: "Sat-Level(%)",
    stroke: 0,
    selectable: false,
    draggable: false,
    outlineColor: "#f0f000",
    fontSize: 10,
    fontFamily: "Arial",
    bold: true,
  });
  canvas.add(
    saturationTitle,
    myConstants.START_X - 70,
    POSITIONS.SATURATION_TEXT_Y_POS
  );

  if (myConstants.DISPLAY_WORKER) {
    let workersTitle = new draw2d.shape.basic.Text({
      text: "Workers",
      stroke: 0,
      selectable: false,
      draggable: false,
      outlineColor: "#f0f000",
      fontSize: 12,
      fontFamily: "Arial",
      bold: true,
    });
    canvas.add(
      workersTitle,
      myConstants.START_X - 70,
      POSITIONS.WORK_ZONE_TEXT_Y_POS
    );
  }

  if (graphDrawOptions.drawInGroups) {
    let workZomeTitle = new draw2d.shape.basic.Label({
      text: "Work Zone",
      stroke: 0,
      selectable: false,
      draggable: false,
      outlineColor: "#f0f000",
      fontSize: 16,
      fontFamily: "Arial",
      bold: true,
    });
    canvas.add(
      workZomeTitle,
      myConstants.START_X - 70,
      POSITIONS.WORK_ZONE_TEXT_Y_POS
    );
  }
  // Y axis text drawing
  const yInterval = myConstants.Y_INTERVAL_VALUE * currentYUnit;
  const yFactor = yInterval / myConstants.ONE_GRID_HEIGHT;
  const totalYAxisHeight = limitLineHeight * 4;
  const totalIntervalForHeight = totalYAxisHeight / yInterval;
  for (let l = 0; l < totalIntervalForHeight; l++) {
    MarkLine = new draw2d.shape.basic.Line({
      startX: myConstants.START_X - 5,
      startY: myConstants.START_Y - (l + 1) * myConstants.ONE_GRID_HEIGHT,
      endX: myConstants.START_X + 5,
      endY: myConstants.START_Y - (l + 1) * myConstants.ONE_GRID_HEIGHT,
      selectable: false,
      draggable: false,
    });
    canvas.add(MarkLine);

    var textToRender = ((l + 1) * yInterval).toFixed(1);
    var xMargin = 65;
    if (currentYUnit == TimeUnit.MINUTE) {
      textToRender = ((l + 1) * yInterval).toFixed(2);
      xMargin = 55;
    } else if (currentYUnit == TimeUnit.HOUR) {
      textToRender = ((l + 1) * yInterval).toFixed(3);
      xMargin = 65;
    }

    let xMark = new draw2d.shape.basic.Text({
      text: "" + textToRender,
      stroke: 0,
      selectable: false,
      draggable: false,
      outlineColor: "#f0f000",
      fontSize: 16,
      fontFamily: "Arial",
      bold: true,
    });
    canvas.add(
      xMark,
      myConstants.START_X - xMargin,
      myConstants.START_Y - (l + 1) * myConstants.ONE_GRID_HEIGHT - 12
    );
  }

  // Graph limit line
  resolvedLimitLineHeight = myConstants.START_Y - limitLineHeight / yFactor;
  limitLine = new draw2d.shape.basic.Line({
    startX: myConstants.START_X,
    startY: resolvedLimitLineHeight,
    endX: myConstants.END_X,
    endY: resolvedLimitLineHeight,
    selectable: false,
    draggable: false,
    color: myConstants.TAKT_TIME_LINE_COLOR,
  });
  // Set the dashed pattern for the line (dasharray)
  limitLine.setStroke(2); // Set line thickness
  limitLine.setDashArray("--");
  canvas.add(limitLine);

  resolvedEfficiencyLineHeight =
    myConstants.START_Y - efficiencyHeight / yFactor;
  efficiencyLine = new draw2d.shape.basic.Line({
    startX: myConstants.START_X,
    startY: resolvedEfficiencyLineHeight,
    endX: myConstants.END_X,
    endY: resolvedEfficiencyLineHeight,
    selectable: false,
    draggable: false,
    color: myConstants.EFFICIENCY_LINE_COLOR,
  });
  efficiencyLine.setStroke(2); // Set line thickness
  efficiencyLine.setDashArray("-");
  canvas.add(efficiencyLine);

  let maxHeight = 0;
  let factory = factories[gFactoryIndex];
  let lastLineEndX = 0;
  const totalLines_InOneFactory = factory.Lines.length;
  let totalCellsInOneFactory = 0;
  for (let lineIndex = 0; lineIndex < totalLines_InOneFactory; lineIndex++) {
    totalCellsInOneFactory += factory.Lines[lineIndex].Cells.length;
  }
  // Set dynamic width of station
  const oneBarMaximumWidth =
    (canvas.getWidth() - myConstants.START_X * 2 * totalLines_InOneFactory) /
    totalCellsInOneFactory;
  myConstants.GAP_AT_X = oneBarMaximumWidth * 0.3;
  myConstants.OPERATION_VA_GAP = myConstants.GAP_AT_X / 4;
  myConstants.OPERATION_WIDTH = oneBarMaximumWidth - myConstants.GAP_AT_X;
  myConstants.VA_WIDTH = myConstants.OPERATION_WIDTH / 6;
  // Each workstation on x
  highestCombinedHeight[0] = highestCombinedHeight[1] = 0;
  totalTimeOnAllStations[0] = totalTimeOnAllStations[1] = 0;
  let highestTextStartPosX = 0;
  let highestHeightCell = null;

  for (let lineIndex = 0; lineIndex < totalLines_InOneFactory; lineIndex++) {
    let line = factory.Lines[lineIndex];

    // add group/line name to x axis
    //addLineNameToXAxis() // TODO move this group name thing to separate function
    if (graphDrawOptions.drawInGroups) {
      let lineName = line.Name + " " + line.VariantId + "." + line.VersionId;
      // Workzone
      const truncatedworkLineName = getTruncatedText(
        lineName,
        myConstants.OPERATION_WIDTH * line.Cells.length - 15
      );

      let lineObj = new draw2d.shape.basic.Label({
        text: lineName,
        stroke: 0,
        width: 50,
        selectable: false,
        draggable: false,
        fontSize: 16,
        fontFamily: "Arial",
        bold: true,
        wordWrap: false,
      });
      //const lineTextStartPos = lineIndex * oneBarMaximumWidth * line.Cells.length + myConstants.GAP_AT_X * line.Cells.length;
      const lineTextStartPos =
        lastLineEndX +
        myConstants.START_X +
        (myConstants.OPERATION_WIDTH * line.Cells.length) / 2 +
        myConstants.GAP_AT_X * (line.Cells.length / 2);
      const textWidth = getTextWidth(truncatedworkLineName);
      let middlePointOfBar = lineTextStartPos - textWidth / 2; // - (myConstants.OPERATION_WIDTH * line.Cells.length / 2);
      //let textStartPos = middlePointOfBar - (tempBarWidth / 2);

      //const lineTextYPos = myConstants.START_Y + 98
      canvas.add(lineObj, middlePointOfBar, POSITIONS.WORK_ZONE_TEXT_Y_POS);
    }
    // --

    for (let k = 0; k < line.Cells.length; k++) {
      let cell = line.Cells[k];

      const workStationName = cell.Name.replace(/\s/g, "_");
      const truncatedworkStationName = getTruncatedText(
        workStationName,
        myConstants.OPERATION_WIDTH - 15
      );

      let workstation1 = new draw2d.shape.basic.Text({
        text: truncatedworkStationName,
        stroke: 0,
        width: 500,
        selectable: false,
        fontSize: 16,
        fontFamily: "Arial",
        bold: true,
      });

      const startXOfCell =
        lastLineEndX +
        myConstants.START_X +
        myConstants.OPERATION_WIDTH * k +
        myConstants.GAP_AT_X * (k + 1);
      const endXOfCell =
        lastLineEndX +
        myConstants.START_X +
        myConstants.OPERATION_WIDTH * k +
        myConstants.GAP_AT_X * (k + 1) +
        myConstants.OPERATION_WIDTH;

      // if it is last operation of cell, store the last index so we offset next line (group)
      if (k === line.Cells.length - 1)
        lastLineEndX = graphDrawOptions.drawInGroups
          ? endXOfCell + myConstants.GAP_AT_X
          : endXOfCell - myConstants.START_X;
      //var textWidth = getTextWidth(workstation1.text)
      //var textStartPosX = startXOfCell + ((endXOfCell - startXOfCell - textWidth - 50) / 2) + 10;

      let tempBarWidth = getTextWidth(truncatedworkStationName) + 30;
      let middlePointOfBar = startXOfCell + myConstants.OPERATION_WIDTH / 2;
      let textStartPos = middlePointOfBar - tempBarWidth / 2;
      if (isValidCompareScenario) {
        if (k % totalCompareItems === 1) {
          textStartPos =
            textStartPos -
            myConstants.GAP_AT_X -
            myConstants.OPERATION_WIDTH / 2;
          canvas.add(workstation1, textStartPos, POSITIONS.STATION_TEXT_Y_POS);
        }
      } else {
        canvas.add(workstation1, textStartPos, POSITIONS.STATION_TEXT_Y_POS);
      }

      cellToXYMap.push({
        key: cell.UniqueId,
        value: { x1: startXOfCell, x2: endXOfCell },
      });
      stationToXYMap.push({
        key: [lineIndex, k],
        value: { x1: startXOfCell, x2: endXOfCell },
      });
      // Each box on Workstation

      var mapTargetWorkers = {};

      if (graphDrawOptions.drawVA) {
        // NVA VA SVA +
        let combinedHeightVA = 0;
        let totalVA = 0;
        let totalNVA = 0;
        let totalSVA = 0;

        // Iterate over each operation to calculate total VA, NVA, and SVA
        for (let l = 0; l < cell.Operations.length; l++) {
          let operation = cell.Operations[l];

          totalVA += operation.VA;
          totalNVA += operation.NVA;
          totalSVA += operation.SVA;
        }
        if (totalVA + totalNVA + totalSVA > 0) {
          // Calculate the total combined height for all three rectangles
          combinedHeightVA =
            (totalNVA * myConstants.ONE_MINUTE_IN_GRAPH * currentYUnit) /
            yFactor;

          // Calculate the y-coordinate for each rectangle
          let currentOperationY = myConstants.START_Y - combinedHeightVA;

          // Create the rectangle for NVA
          let rectNVA = new LabelRectangle({
            x:
              startXOfCell +
              myConstants.OPERATION_WIDTH +
              myConstants.OPERATION_VA_GAP,
            y: currentOperationY,
            bgColor: myConstants.NVA_COLOR,
            alpha: 0.7,
            width: myConstants.VA_WIDTH,
            height:
              (totalNVA * myConstants.ONE_MINUTE_IN_GRAPH * currentYUnit) /
              yFactor,
            userData: { Name: "NVA", Duration: totalNVA },
            radius: 1,
            resizeable: false,
            draggable: false,
          });
          canvas.add(rectNVA);

          combinedHeightVA =
            (totalVA * myConstants.ONE_MINUTE_IN_GRAPH * currentYUnit) /
              yFactor +
            +(
              (totalNVA * myConstants.ONE_MINUTE_IN_GRAPH * currentYUnit) /
              yFactor
            );
          currentOperationY = myConstants.START_Y - combinedHeightVA;

          // Create the rectangle for VA
          let rectVA = new LabelRectangle({
            x:
              startXOfCell +
              myConstants.OPERATION_WIDTH +
              myConstants.OPERATION_VA_GAP,
            y: currentOperationY,
            bgColor: myConstants.VA_COLOR,
            alpha: 0.7,
            width: myConstants.VA_WIDTH,
            height:
              (totalVA * myConstants.ONE_MINUTE_IN_GRAPH * currentYUnit) /
              yFactor,
            userData: { Name: "VA", Duration: totalVA },
            radius: 1,
            resizeable: false,
            draggable: false,
          });
          canvas.add(rectVA);

          combinedHeightVA =
            (totalVA * myConstants.ONE_MINUTE_IN_GRAPH * currentYUnit) /
              yFactor +
            +(
              (totalNVA * myConstants.ONE_MINUTE_IN_GRAPH * currentYUnit) /
              yFactor
            ) +
            +(
              (totalSVA * myConstants.ONE_MINUTE_IN_GRAPH * currentYUnit) /
              yFactor
            );
          currentOperationY = myConstants.START_Y - combinedHeightVA;

          // Create the rectangle for SVA
          let rectSVA = new LabelRectangle({
            x:
              startXOfCell +
              myConstants.OPERATION_WIDTH +
              myConstants.OPERATION_VA_GAP,
            y: currentOperationY,
            bgColor: myConstants.SVA_COLOR,
            alpha: 0.7,
            width: myConstants.VA_WIDTH,
            height:
              (totalSVA * myConstants.ONE_MINUTE_IN_GRAPH * currentYUnit) /
              yFactor,
            userData: { Name: "SVA", Duration: totalSVA },
            radius: 1,
            resizeable: false,
            draggable: false,
          });
          canvas.add(rectSVA);
        }
        // NVA VA SVA -
      }

      let combinedHeight = 0;
      if (graphDrawOptions.drawNormal) {
        for (let l = 0; l < cell.Operations.length; l++) {
          let operation = cell.Operations[l];

          for (var o = 0; o < operation.TargetWorkers.length; o++) {
            if (
              mapTargetWorkers.hasOwnProperty(operation.TargetWorkers[o].Name)
            ) {
              // Key already exists, increment the count
              mapTargetWorkers[operation.TargetWorkers[o].Name]++;
            } else {
              // Key doesn't exist, set the initial count to 1
              mapTargetWorkers[operation.TargetWorkers[o].Name] = 1;
            }
          }
          let currentOperationHeight =
            (operation.Duration *
              myConstants.ONE_MINUTE_IN_GRAPH *
              currentYUnit) /
            yFactor;
          combinedHeight += currentOperationHeight;
          let currentOperationY = myConstants.START_Y - combinedHeight;

          // TODO Need wrape text? then work in this function
          var operationText = getMultilineText(
            operation.UniqueId,
            myConstants.OPERATION_WIDTH
          );
          var operationColor = "#f0f000";
          if (combinedHeight > myConstants.START_Y - resolvedLimitLineHeight) {
            operationColor = "#ff0000";
          }

          var isDraggable = true;
          if (
            operation.TargetTools.length &&
            operation.TargetTools[0].isMonumental
          ) {
            isDraggable = false;
            operationColor = myConstants.NON_MOVABLE_OBJ_COLOR; //operation.TargetTools[0].isMonumental;
          }
          if (operation.IsReserved) {
            operationColor = myConstants.RESERVED_COLOR;
            isDraggable = false;
            let path = configuration.IS_SERVER
              ? paths.SERVER_PATH_PREFIX + paths.RESERVED_OPERATION_ICON_PATH
              : paths.RESERVED_OPERATION_ICON_PATH;
            addImageIcon(
              cell,
              path,
              startXOfCell,
              currentOperationY,
              myConstants.OPERATION_WIDTH,
              currentOperationHeight
            );
          } else {
            var fittedText =
              currentOperationHeight <= 10 || myConstants.OPERATION_WIDTH < 20
                ? ""
                : getTruncatedText(
                    operation.Name,
                    myConstants.OPERATION_WIDTH - 35
                  );
            let rect = new LabelRectangle({
              x: startXOfCell,
              y: currentOperationY,
              bgColor: operationColor,
              alpha: 0.7,
              width: myConstants.OPERATION_WIDTH,
              height: currentOperationHeight,
              userData: { Name: operation.Name, Duration: operation.Duration },
              text: fittedText, //UniqueId.substring(operation.UniqueId.length - 20),
              radius: 1,
              resizeable: false,
              draggable: isDraggable,
            });

            if (line.Cells[k].IsCompare) {
              rect.setStroke(2); // Set line thickness
              rect.setDashArray("-");
              rect.alpha = 0.4;
              rect.bgColor.red = myConstants.COMPARE_COLOR[0]; //setColor("#ff0000");
              rect.bgColor.green = myConstants.COMPARE_COLOR[1];
              rect.bgColor.blue = myConstants.COMPARE_COLOR[2];
            }
            // Set the ID
            rect.setId(operation.UniqueId);
            canvas.add(rect);
            line.Cells[k].Rectangle = rect;
          }
        }
      }

      const stationIconHalfWidth = 12;
      if (isValidCompareScenario) {
        if (k % totalCompareItems === 1) {
          totalTimeOnAllStations[1] += combinedHeight * yFactor;

          if (combinedHeight > highestCombinedHeight[1]) {
            highestCombinedHeight[1] = combinedHeight;
            highestTextStartPosX = middlePointOfBar - stationIconHalfWidth;
            highestHeightCell = cell;
          }
        } else {
          totalTimeOnAllStations[0] += combinedHeight * yFactor;

          if (combinedHeight > highestCombinedHeight[0]) {
            highestCombinedHeight[0] = combinedHeight;
            highestTextStartPosX = middlePointOfBar - stationIconHalfWidth;
            highestHeightCell = cell;
          }
        }
      } else {
        totalTimeOnAllStations[0] += combinedHeight * yFactor;

        if (combinedHeight > highestCombinedHeight[0]) {
          highestCombinedHeight[0] = combinedHeight;
          highestTextStartPosX = middlePointOfBar - stationIconHalfWidth;
          highestHeightCell = cell;
        }
      }

      // Icon in front of workstation ++
      addImageIconInForStation(cell, middlePointOfBar - stationIconHalfWidth);
      if (viewType == viewTypeConst.OPERATOR) {
        let OperatorText;
        if (cell.OperatorName) OperatorText = cell.OperatorName;
        else {
          OperatorText = OperatorName + OperatorCount;
          cell.OperatorName = OperatorText;
          OperatorCount++;
        }
        let operatorTextShape = new draw2d.shape.basic.Text({
          text: OperatorText,
          stroke: 0,
          width: 500,
          selectable: false,
          fontSize: 16,
          fontFamily: "Arial",
          bold: true,
          draggable: graphDrawOptions.drawInGroups,
          userData: { lineIdx: lineIndex, operatorIdx: k },
        });

        operatorTextShape.on("dragend", function (emitter, event) {
          if (event.ctrlKey === true) {
            enableEditTextBox(operatorTextShape);
            return;
          }
          // Your callback logic here
          console.log("Operator dragged and dropped!");
          const newStationId = searchForNumber(
            emitter.x,
            emitter.x + emitter.width,
            stationToXYMap
          );
          if (
            isUniqOperatorForLine(newStationId[0], emitter.text) &&
            emitter.userData.lineIdx != newStationId[0]
          )
            addExistingOperatorCumCell(
              emitter.userData.lineIdx,
              emitter.userData.operatorIdx,
              newStationId[0],
              newStationId[1]
            );
          else DrawGraph();
        });
        // Enable text editing on click
        operatorTextShape.on("click", function (emitter, event) {
          if (event.ctrlKey === true) {
            enableEditTextBox(operatorTextShape);
          }
        });

        canvas.add(
          operatorTextShape,
          middlePointOfBar - tempBarWidth / 2,
          POSITIONS.OPERATOR_TEXT_Y_POS
        );
        let path = configuration.IS_SERVER
          ? paths.SERVER_PATH_PREFIX + paths.OPERATOR_ICON_PATH
          : paths.OPERATOR_ICON_PATH;

        addImageIcon(
          cell,
          path,
          middlePointOfBar - stationIconHalfWidth,
          POSITIONS.OPERATOR_ICON_Y_POS
        );
      }
      // Icon in front of workstation --

      // saturation level +
      addSaturationLevelText(k, combinedHeight, startXOfCell, endXOfCell);
      // saturation leve -

      if (myConstants.DISPLAY_WORKER) {
        var iconStartPosX =
          startXOfCell +
          (endXOfCell -
            startXOfCell -
            20 * Object.keys(mapTargetWorkers).length) /
            2;
        const yOffset = 80;
        Object.entries(mapTargetWorkers).forEach(function ([key, value]) {
          canvas.add(
            new customIcon({
              width: 20,
              height: 20,
              draggable: false,
              userData: key,
            }),
            iconStartPosX,
            myConstants.START_Y + yOffset + 20
          );
          let totalHeight = new draw2d.shape.basic.Text({
            text: "(" + value + ")",
            stroke: 0,
            selectable: false,
            draggable: false,
            fontSize: 16,
            fontFamily: "Arial",
            bold: true,
          });
          canvas.add(
            totalHeight,
            iconStartPosX - 5,
            myConstants.START_Y + yOffset + 40
          );

          iconStartPosX = iconStartPosX + 20;
        });
      }

      if (combinedHeight > maxHeight) {
        maxHeight = combinedHeight;
      }
      cell.TotalHeight = combinedHeight;
      var textToRender = combinedHeight * yFactor;

      if (Math.round(textToRender) != textToRender) {
        textToRender = textToRender.toFixed(2);
      }

      let totalHeight = new draw2d.shape.basic.Text({
        text: "" + textToRender + "",
        stroke: 0,
        selectable: false,
        draggable: false,
        fontSize: 16,
        fontFamily: "Arial",
        bold: true,
      });
      tempBarWidth = getTextWidth(textToRender) + 20;
      textStartPos =
        startXOfCell + myConstants.OPERATION_WIDTH / 2 - tempBarWidth / 2;
      //(myConstants.GAP_AT_X * (k + 1)) + (myConstants.OPERATION_WIDTH * k)
      canvas.add(
        totalHeight,
        textStartPos,
        myConstants.START_Y - 30 - combinedHeight
      );
    }

    // KPI data population

    const divFactor =
      currentYUnit == TimeUnit.MINUTE
        ? 1
        : currentYUnit == TimeUnit.SECOND
        ? 60
        : 1 / 60;
    totalTimeOnAllStations[0] = totalTimeOnAllStations[0] / divFactor;
    totalTimeOnAllStations[1] = totalTimeOnAllStations[1] / divFactor;
    // console.log(totalTimeOnAllStations[0]);

    const noOfCellDivFactor = isValidCompareScenario ? totalCompareItems : 1;
    const noOfCellTemp = line.Cells.length / noOfCellDivFactor;
    kpiDataMap["Bottleneck station cycle time"] = (
      (highestCombinedHeight[0] * yFactor) /
      divFactor
    ).toFixed(2);
    kpiDataMap["Count of stations/operator"] = noOfCellTemp;
    kpiDataMap["Line Balancing Ratio"] =
      (
        (totalTimeOnAllStations[0] /
          (kpiDataMap["Bottleneck station cycle time"] * noOfCellTemp)) *
        100
      ).toFixed(2) + "%";
    //kpiDataMap['Available time per shift'] = 1000; // this data is set using text box
    kpiDataMap["Productivity improvement"] = 0;
    kpiDataMap["Operator Utilization"] =
      (
        (totalTimeOnAllStations[0] /
          kpiDataMap["Count of stations/operator"] /
          (limitLineHeight / divFactor)) *
        100
      ).toFixed(2) + "%";

    kpiSecondaryDataMap["Bottleneck station cycle time"] = (
      (highestCombinedHeight[1] * yFactor) /
      divFactor
    ).toFixed(2);
    kpiSecondaryDataMap["Count of stations/operator"] = noOfCellTemp;
    kpiSecondaryDataMap["Line Balancing Ratio"] =
      (
        (totalTimeOnAllStations[1] /
          (kpiSecondaryDataMap["Bottleneck station cycle time"] *
            noOfCellTemp)) *
        100
      ).toFixed(2) + "%";
    //kpiDataMap['Available time per shift'] = 1000; // this data is set using text box
    kpiSecondaryDataMap["Productivity improvement"] = 0;
    kpiSecondaryDataMap["Operator Utilization"] =
      (
        (totalTimeOnAllStations[1] /
          kpiSecondaryDataMap["Count of stations/operator"] /
          (limitLineHeight / divFactor)) *
        100
      ).toFixed(2) + "%";

    sampleKPITableData(kpiDataMap, kpiSecondaryDataMap);
  }
  // Icon in front of workstation ++
  addImageIconInForStation(highestHeightCell, highestTextStartPosX, true);
}

// utility functions :: TODO move to new file called Utility.js
function addImageIconInForStation(cell, textStartPosX, isRed = false) {
  if (cell === null) return;

  let path = configuration.IS_SERVER
    ? paths.SERVER_PATH_PREFIX + paths.BLACK_WORKSTATION
    : paths.BLACK_WORKSTATION;
  if (isRed) {
    //if (combinedHeight > (myConstants.START_Y - resolvedLimitLineHeight)) {
    path = configuration.IS_SERVER
      ? paths.SERVER_PATH_PREFIX + paths.RED_WORKSTATION
      : paths.RED_WORKSTATION;
  }
  addImageIcon(cell, path, textStartPosX, POSITIONS.STATION_ICON_Y_POS);
}

function addImageIcon(cell, path, xPos, yPos, width = 20, height = 20) {
  if (cell === null) return;

  let icon = new CustomImageIcon({
    width: width,
    height: height,
    draggable: false,
    imagePath: path, // Replace with the actual path to your icon image
    userData: cell.Name,
  });

  // Add the icon shape to the canvas
  canvas.add(icon, xPos, yPos);
}

function addSaturationLevelText(k, combinedHeight, startXOfCell, endXOfCell) {
  const saturationText =
    "" +
    (
      (combinedHeight / (myConstants.START_Y - resolvedLimitLineHeight)) *
      100
    ).toFixed(2);
  let workstation1 = new draw2d.shape.basic.Text({
    text: saturationText,
    stroke: 0,
    width: 500,
    selectable: false,
    draggable: false,
    fontSize: 10,
    fontFamily: "Arial",
    bold: true,
  });

  var textWidth = getTextWidth(saturationText);
  var textStartPosX =
    startXOfCell + (endXOfCell - startXOfCell - textWidth - 40) / 2 + 10;
  canvas.add(workstation1, textStartPosX, POSITIONS.SATURATION_TEXT_Y_POS);
}

// utility functions --

// TODO move to new file
// undo redo feature
class FactoryTracker {
  constructor(initialData) {
    this.states = [];
    this.currentStateIndex = -1;
    this.updateState(initialData);
  }

  updateState(newState, movedOperation) {
    // Discard redo states if a new update is made after undoing
    this.states = this.states.slice(0, this.currentStateIndex + 1);

    const clonedState = this.cloneState(newState);
    const updatedState = { state: clonedState, movedOperation };
    this.states.push(updatedState);
    this.currentStateIndex++;
  }

  undo() {
    if (this.currentStateIndex > 0) {
      this.currentStateIndex--;
      return this.cloneState(this.states[this.currentStateIndex].state);
    }

    return null; // No more undo states available
  }

  redo() {
    if (this.currentStateIndex < this.states.length - 1) {
      this.currentStateIndex++;
      return this.cloneState(this.states[this.currentStateIndex].state);
    }

    return null; // No more redo states available
  }

  cloneState(state) {
    const visited = new WeakSet();

    const clone = (obj) => {
      if (typeof obj === "object" && obj !== null) {
        if (visited.has(obj)) {
          return obj;
        }
        visited.add(obj);

        const clonedObj = Array.isArray(obj) ? [] : {};

        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            clonedObj[key] = clone(obj[key]);
          }
        }

        return clonedObj;
      }

      return obj;
    };

    return clone(state);
  }
}

//New UI Code Implimentaion start form here

function addOptionsToComboBoxDiv(
  comboId,
  docIdArray,
  callback_change,
  labelSpanId
) {
  var select = document.getElementById(comboId);

  // Clear existing options
  select.innerHTML = "";

  // Add new options from the array
  docIdArray.forEach(function (option) {
    var newOption = document.createElement("a");
    newOption.href = "#";
    newOption.textContent = option;
    newOption.addEventListener("click", function (e) {
      e.preventDefault();
      if (labelSpanId !== null && labelSpanId !== undefined) {
        // Update the label span content
        document.getElementById(labelSpanId).textContent = option;
      }
      callback_change(option);
    });
    select.appendChild(newOption);
  });
}

// Createing Side panel KPI Table

function createSidePanelKPITable() {
  const table = document.getElementById("Side_Panel_KPI_Table");
  table.innerHTML = "";
  // Table header
  const tableHead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Parameters", "Time(Min.)", "Compare Time(Min)"].forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);

  // Table body with dummy data
  const tableBody = document.createElement("tbody");
  const dummyData = [
    ["Bottleneck station cycle time", 45, 45],
    ["Count of stations/operator", 6, 6],
    ["Line Balancing Ratio", 1.23, 1.23],
    ["Available time per shift", 450, 450],
    ["Output/shift", 120, 120],
    ["# of Units/operator/shift", 20, 20],
    ["Productivity improvement", 0.15, 0.15],
    ["Operator Utilization", 85, 85],
  ];

  dummyData.forEach((data) => {
    const row = document.createElement("tr");
    data.forEach((item) => {
      const cell = document.createElement("td");
      cell.textContent = item;
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
}

function sampleKPITableData(timeDataMap, kpiSecondaryDataMap = undefined) {
  kpiDataMap["Output/shift"] = Math.floor(
    kpiDataMap["Available time per shift"] /
      kpiDataMap["Bottleneck station cycle time"]
  );
  kpiDataMap["# of Units/operator/shift"] =
    kpiDataMap["Output/shift"] / kpiDataMap["Count of stations/operator"];

  kpiSecondaryDataMap["Output/shift"] = Math.floor(
    kpiSecondaryDataMap["Available time per shift"] /
      kpiSecondaryDataMap["Bottleneck station cycle time"]
  );
  kpiSecondaryDataMap["# of Units/operator/shift"] =
    kpiSecondaryDataMap["Output/shift"] /
    kpiSecondaryDataMap["Count of stations/operator"];

  const tableBody = document.querySelector("#Side_Panel_KPI_Table tbody");
  const rows = tableBody.querySelectorAll("tr"); // Leave the last row with the "Close" button

  // Validate the number of time values
  if (Object.keys(timeDataMap).length !== rows.length) {
    console.error(
      "Number of time values does not match the number of rows in the table."
    );
    return;
  }

  // Update the table with the new time values
  rows.forEach((row) => {
    const parameter = row.querySelector("td:first-child").textContent;
    if (timeDataMap.hasOwnProperty(parameter)) {
      const timeCell = row.querySelector("td:nth-child(2)");
      timeCell.textContent = timeDataMap[parameter];

      if (kpiSecondaryDataMap.hasOwnProperty(parameter)) {
        const secondaryCell = row.querySelector("td:nth-child(3)"); // Select the third column
        secondaryCell.textContent = kpiSecondaryDataMap[parameter];
      }
    }
  });
}

// Function for addition Oprator button

function additionOpratorButton() {
  var input = prompt(
    "Existing Line Index, Operator Index, Destination Line Index, Destination Station"
  );

  if (input !== null) {
    // Split the input by commas and parse the values
    var values = input.split(",").map(function (value) {
      return parseInt(value);
    });

    // Check if we have three values
    if (values.length === 4) {
      // Call your function with the parsed values
      addExistingOperatorCumCell(
        values[0] - 1,
        values[1] - 1,
        values[2] - 1,
        values[3] - 1
      );
    } else {
      alert("Invalid input. Please provide three values separated by commas.");
    }
  } else {
    alert("User cancelled the input.");
  }
}

// Function for editing oprator button

function editOpratorButton() {
  var input = prompt("Source Line Index, Operator Index, Operator New Name");

  if (input !== null) {
    // Split the input by commas and parse the values
    var values = input.split(",").map(function (value) {
      return value;
    });

    // Check if we have three values
    if (values.length === 3) {
      // Call your function with the parsed values
      renameOperator(values[0] - 1, values[1] - 1, values[2]);
    } else {
      alert("Invalid input. Please provide three values separated by commas.");
    }
  } else {
    alert("User cancelled the input.");
  }
}

function expandContorlButton() {
  resetZoom();
}
function refreshContorlButton() {
  resizeCanvas();
}
function undoControlButton() {
  customUndo();
}
function redoControlButton() {
  customRedo();
}
function ReloadControlButton() {
  refreshGraph();
}
function SaveControlButton() {
  saveUpdatedDataToJson(launchParameters.wtdocOid);
}

function demandUserInput() {
  var demandTextBox = document.getElementById("demand");
  demandTextBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission or line break

      demandTextBoxValue = demandTextBox.value;
      if (demandTextBoxValue != "") {
        updateLimitLine();
        console.log("Input Value:", demandTextBoxValue);
      }
    }
  });

  // Add an event listener to the textbox mousedown event
  demandTextBox.addEventListener("mousedown", function (event) {
    event.stopPropagation();
  });
}
demandUserInput();

function efficiencyUserInput() {
  var efficiencTextBox = document.getElementById("efficiency");
  efficiencTextBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission or line break

      var inputValue = efficiencTextBox.value;
      if (inputValue != "") {
        efficiencyTextBoxValue = Number(inputValue);
        updateLimitLine();
        console.log("Input Value:", inputValue);
      }
    }
  });

  // Add an event listener to the textbox mousedown event
  efficiencTextBox.addEventListener("mousedown", function (event) {
    event.stopPropagation();
  });
}
efficiencyUserInput();

function shiftTimeUserInput() {
  var shiftTimeTextBox = document.getElementById("sift_time");
  shiftTimeTextBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission or line break

      var inputValue = shiftTimeTextBox.value;
      if (inputValue != "") {
        kpiDataMap["Available time per shift"] = inputValue;
        console.log("Input Value:", inputValue);

        sampleKPITableData(kpiDataMap, kpiSecondaryDataMap);
        updateLimitLine();
      }
    }
  });
  // Add an event listener to the textbox mousedown event
  shiftTimeTextBox.addEventListener("mousedown", function (event) {
    event.stopPropagation();
  });
}
shiftTimeUserInput();

function addInputsToComboBoxDiv(
  comboId,
  docIdArray,
  checkboxName,
  callback_change
) {
  var select = document.getElementById(comboId);

  // Clear existing options
  select.innerHTML = "";

  // Add new options from the array
  docIdArray.forEach(function (option) {
    var newOption = document.createElement("a");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = checkboxName + option;
    checkbox.name = "checkboxName";
    checkbox.value = option;
    newOption.appendChild(checkbox);
    var label = document.createElement("label");
    label.htmlFor = checkboxName + option;
    label.appendChild(document.createTextNode(option));
    newOption.appendChild(label);

    newOption.href = "#";
    newOption.addEventListener("click", function (e) {
      callback_change(option);
    });
    select.appendChild(newOption);
  });
}
