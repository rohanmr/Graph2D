const configuration = {
    IS_SERVER: false
}

const paths = {
    SERVER_PATH_PREFIX: "netmarkets/javascript/linebalance/Graph2D_Agmntx/Dev/Graph2D/",
    RED_WORKSTATION: "images/red_workstation.jpeg",
    BLACK_WORKSTATION: "images/black_workstation.jpeg",
    OPERATOR_ICON_PATH: "images/operator.png",
    RESERVED_OPERATION_ICON_PATH: "images/ReservedOperationSpaceIcon.png",
}

const myConstants = {
    START_X: 70,
    START_Y: 560,
    END_X: 2120,
    END_Y: 60,

    GAP_AT_X: 30, // means 1.5 grid boxs . 1 GRID box means 20
    OPERATION_WIDTH: 140,
    VA_WIDTH: 25,
    OPERATION_VA_GAP: 8,
    ONE_MINUTE_IN_GRAPH: 1,
    ONE_GRID_HEIGHT: 20,
    Y_INTERVAL_VALUE: 40,

    NON_MOVABLE_OBJ_COLOR: "#808080",
    EFFICIENCY_LINE_COLOR: "#FFA500",
    TAKT_TIME_LINE_COLOR: "#0000FF",
    VA_COLOR: "#00FF00",
    NVA_COLOR: "#FF0000",
    SVA_COLOR: "#FFFF00",
    COMPARE_COLOR : [0,200,0],

    DISPLAY_WORKER: false,
}

const POSITIONS = {
    STATION_TEXT_Y_POS: myConstants.START_Y + 10,
    STATION_ICON_Y_POS: myConstants.START_Y + 35,
    SATURATION_TEXT_Y_POS: myConstants.START_Y + 65,
    WORK_ZONE_TEXT_Y_POS: myConstants.START_Y + 98,
    OPERATOR_TEXT_Y_POS: myConstants.START_Y + 10,
    OPERATOR_ICON_Y_POS: myConstants.START_Y + 35,
}

