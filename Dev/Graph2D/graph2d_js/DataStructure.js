// Define the classes and properties
class Factory {
    constructor(VersionId, UniqueId, VariantId, Name, Lines) {
        this.VersionId = VersionId;
        this.UniqueId = UniqueId;
        this.VariantId = VariantId;
        this.Name = Name;
        this.Lines = Lines;
    }
}

class Line {
    constructor(VersionId, UniqueId, VariantId, Cells, Name) {
        this.VersionId = VersionId;
        this.UniqueId = UniqueId;
        this.VariantId = VariantId;
        this.Cells = Cells;
        this.Name = Name;
    }
}

// Stations
class Cell {
    constructor(VersionId, UniqueId, VariantId, Operations, Name, TotalHeight = 0, OperatorName = "", IsCompare = false) {
        this.VersionId = VersionId;
        this.UniqueId = UniqueId;
        this.VariantId = VariantId;
        this.Operations = Operations;
        this.Name = Name;
        this.TotalHeight = TotalHeight;
        this.OperatorName = OperatorName;
        this.IsCompare = IsCompare
    }
    // Create a deep copy method for the Cell class
    deepCopy() {
        const copiedOperations = [];

        return new Cell(
            this.VersionId,
            this.UniqueId,
            this.VariantId,
            copiedOperations,
            this.Name,
            this.TotalHeight,
            this.OperatorName
        );
    }

    // Calculate the combined duration of operations
    calculateCombinedDuration() {
        let combinedDuration = 0;

        for (const operation of this.Operations) {
            combinedDuration += operation.Duration;
        }

        return combinedDuration;
    }
}

class Operation {
    constructor(VersionId, Activities, UniqueId, Type, TargetParts, WalkDistance, TargetTools, Duration, VariantId, TargetWorkers, Name, SVA, NVA, VA, IsReserved = false) {
        this.VersionId = VersionId;
        this.Activities = Activities;
        this.UniqueId = UniqueId;
        this.Type = Type;
        this.TargetParts = TargetParts;
        this.WalkDistance = WalkDistance;
        this.TargetTools = TargetTools;
        this.Duration = Duration;
        this.VariantId = VariantId;
        this.TargetWorkers = TargetWorkers;
        this.Name = Name;
        this.SVA = SVA;
        this.NVA = NVA;
        this.VA = VA;
        this.IsReserved = IsReserved;
    }
}

class TargetPart {
    constructor(VersionId, UniqueId, WcNumber, VariantId, Name) {
        this.VersionId = VersionId;
        this.UniqueId = UniqueId;
        this.WcNumber = WcNumber;
        this.VariantId = VariantId;
        this.Name = Name;
    }
}

class TargetTool {
    constructor(UniqueId, isMonumental, WcNumber, Name) {
        this.UniqueId = UniqueId;
        this.isMonumental = isMonumental;
        this.WcNumber = WcNumber;
        this.Name = Name;
    }
}


// Helper data structure

var cellToXYMap = [];// = new Map();


