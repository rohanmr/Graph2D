var script2 = document.createElement("script");  // create a script DOM node
script2.src = "graph2d_js/DataStructure.js";  // set its src to the provided URL

document.head.appendChild(script2);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)

var script3 = document.createElement("script");  // create a script DOM node
script3.src = "graph2d_js/Constants.js";  // set its src to the provided URL

document.head.appendChild(script3);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
var sampleJsonSmall = `{
  "Factories": [
    {
      "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMPlant:404891",
      "VersionId": null,
      "VariantId": null,
      "Name": "Pune",
      "Lines": [
        {
          "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:479841",
          "VersionId": "1",
          "VariantId": "A",
          "Name": "First_SS-Line01",
          "Cells": [
            {
              "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:480428",
              "VersionId": "1",
              "VariantId": "A",
              "Name": "Station SS003",
              "Operations": [
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484693",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0060",
                  "Duration": 48.0,
                  "VA": 10.0,
                  "NVA": 15.0,
                  "SVA": 23.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484613",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C6",
                      "WcNumber": "0000000570"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:484629",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C8",
                      "WcNumber": "0000000572"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:484621",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C7",
                      "WcNumber": "0000000571"
                    }
                  ]
                }
              ]
            },
            {
              "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:480417",
              "VersionId": "1",
              "VariantId": "A",
              "Name": "Station SS002",
              "Operations": [
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484756",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0050",
                  "Duration": 90.0,
                  "VA": 25.0,
                  "NVA": 30.0,
                  "SVA": 35.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Mechinist",
                      "WcNumber": "0000000562",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:483629",
                      "Role": "Machinist"
                    }
                  ],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484637",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C9",
                      "WcNumber": "0000000573"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:484355",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C5",
                      "WcNumber": "0000000569"
                    }
                  ]
                },
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484788",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0040",
                  "Duration": 70.0,
                  "VA": 20.0,
                  "NVA": 25.0,
                  "SVA": 25.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Mechinist",
                      "WcNumber": "0000000562",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:483629",
                      "Role": "Machinist"
                    },
                    {
                      "Name": "Inspector",
                      "WcNumber": "0000000561",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:483618",
                      "Role": "Inspector"
                    }
                  ],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484645",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C10",
                      "WcNumber": "0000000574"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:484347",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C4",
                      "WcNumber": "0000000568"
                    }
                  ]
                },
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484491",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0030",
                  "Duration": 300.0,
                  "VA": 100.0,
                  "NVA": 100.0,
                  "SVA": 100.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Inspector",
                      "WcNumber": "0000000561",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:483618",
                      "Role": "Inspector"
                    }
                  ],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484339",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C3",
                      "WcNumber": "0000000567"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:479866",
          "VersionId": "1",
          "VariantId": "A",
          "Name": "Second-SS-Line01",
          "Cells": [
            {
              "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:484066",
              "VersionId": "1",
              "VariantId": "A",
              "Name": "Station SS001",
              "Operations": [
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484468",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0020",
                  "Duration": 100.0,
                  "VA": 40.0,
                  "NVA": 30.0,
                  "SVA": 30.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Assembler A",
                      "WcNumber": "0000000541",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:479881",
                      "Role": "Assembler"
                    }
                  ],
                  "TargetTools": [
                    {
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMTooling:4840399",
                      "isMonumental": true,
                      "WcNumber": "0000000563",
                      "Name": "Drill"
                    }
                  ],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484331",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C2",
                      "WcNumber": "0000000566"
                    }
                  ]
                },
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484401978",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0010",
                  "Duration": 50.0,
                  "VA": 10.0,
                  "NVA": 20.0,
                  "SVA": 20.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Assembler A",
                      "WcNumber": "0000000541",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:479884510",
                      "Role": "Assembler"
                    }
                  ],
                  "TargetTools": [
                    {
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMTooling:484457031",
                      "isMonumental": true,
                      "WcNumber": "0000000563",
                      "Name": "Drill"
                    }
                  ],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484465323",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C1",
                      "WcNumber": "0000000565"
                    }
                  ]
                }
              ]
            },
            {
              "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:480451428",
              "VersionId": "1",
              "VariantId": "A",
              "Name": "Station SS003",
              "Operations": [
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484457693",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0060",
                  "Duration": 48.0,
                  "VA": 10.0,
                  "NVA": 15.0,
                  "SVA": 23.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484616543",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C6",
                      "WcNumber": "0000000570"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:4846123629",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C8",
                      "WcNumber": "0000000572"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:48445855621",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C7",
                      "WcNumber": "0000000571"
                    }
                  ]
                }
              ]
            },
            {
              "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:4811510417",
              "VersionId": "1",
              "VariantId": "A",
              "Name": "Station SS002",
              "Operations": [
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:4847651456",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0050",
                  "Duration": 90.0,
                  "VA": 25.0,
                  "NVA": 30.0,
                  "SVA": 35.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Mechinist",
                      "WcNumber": "0000000562",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:4835414629",
                      "Role": "Machinist"
                    }
                  ],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484584637",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C9",
                      "WcNumber": "0000000573"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:484547355",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C5",
                      "WcNumber": "0000000569"
                    }
                  ]
                },
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484788457",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0040",
                  "Duration": 70.0,
                  "VA": 20.0,
                  "NVA": 25.0,
                  "SVA": 25.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Mechinist",
                      "WcNumber": "0000000562",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:483625479",
                      "Role": "Machinist"
                    },
                    {
                      "Name": "Inspector",
                      "WcNumber": "0000000561",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:4836651418",
                      "Role": "Inspector"
                    }
                  ],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484665445",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C10",
                      "WcNumber": "0000000574"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:484451347",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C4",
                      "WcNumber": "0000000568"
                    }
                  ]
                },
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:4844945141",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0030",
                  "Duration": 200.0,
                  "VA": 100.0,
                  "NVA": 50.0,
                  "SVA": 50.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Inspector",
                      "WcNumber": "0000000561",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:4834574618",
                      "Role": "Inspector"
                    }
                  ],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484451339",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C3",
                      "WcNumber": "0000000567"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "LaunchParameters": {
    "plantOid": "VR:com.ptc.windchill.mpml.resource.MPMPlant:376016",
    "wcServerURL": "http://augm01.aug.com/Windchill/",
    "processPlanId": "VR:com.ptc.windchill.mpml.processplan.MPMProcessPlan:448762",
    "containerId": "OR:wt.pdmlink.PDMLinkProduct:161390",
    "processPlanNavigationCriteriaId": "OR:wt.filter.NavigationCriteria:414808"
  }
  }
  `

$.getScript("../draw2d.js", function () {
  $.getScript("graph2d_js/Main.js", function () {
    // Parse the JSON string
    //const json = '{"Factories":[{"VersionId":null,"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMPlant:310204","VariantId":null,"Name":"Pune","Lines":[{"VersionId":"1","UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:300146","VariantId":"A","Cells":[{"VersionId":"1","UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:300258","VariantId":"A","Operations":[{"VersionId":null,"Activities":[],"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:304276","Type":"Assemble","TargetParts":[{"VersionId":"1","UniqueId":"OR:wt.part.WTPart:119264","WcNumber":"WCDS000760","VariantId":"A","Name":"oil_pan.prt"}],"WalkDistance":0,"TargetTools":[],"Duration":30,"VariantId":null,"TargetWorkers":[],"Name":"Name_0040"},{"VersionId":null,"Activities":[],"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:310375","Type":"Assemble","TargetParts":[{"VersionId":"1","UniqueId":"OR:wt.part.WTPart:119417","WcNumber":"WCDS000591","VariantId":"A","Name":"oilpump_out_ring.prt"},{"VersionId":"1","UniqueId":"OR:wt.part.WTPart:119416","WcNumber":"WCDS000602","VariantId":"A","Name":"oilpump_seal.prt"}],"WalkDistance":0,"TargetTools":[{"UniqueId":"VR:com.ptc.windchill.mpml.resource.MPMTooling:310269","isMonumental":false,"WcNumber":"0000000384","Name":"Screw Driver"}],"Duration":50,"VariantId":null,"TargetWorkers":[],"Name":"Name_0020"}],"Name":"Work Center 002"},{"VersionId":"1","UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:300185","VariantId":"A","Operations":[{"VersionId":null,"Activities":[],"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:310405","Type":"Assemble","TargetParts":[{"VersionId":"1","UniqueId":"OR:wt.part.WTPart:119267","WcNumber":"WCDS000060","VariantId":"A","Name":"oilpump_housing.prt"},{"VersionId":"1","UniqueId":"OR:wt.part.WTPart:119402","WcNumber":"WCDS000022","VariantId":"A","Name":"oilpump_coverplate.prt"}],"WalkDistance":0,"TargetTools":[{"UniqueId":"VR:com.ptc.windchill.mpml.resource.MPMTooling:310283","isMonumental":false,"WcNumber":"0000000385","Name":"Spanner"}],"Duration":90,"VariantId":null,"TargetWorkers":[],"Name":"Name_0030"},{"VersionId":null,"Activities":[],"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:310328","Type":"Assemble","TargetParts":[{"VersionId":"1","UniqueId":"OR:wt.part.WTPart:119436","WcNumber":"WCDS000387","VariantId":"A","Name":"oilpump_in_ring.prt"},{"VersionId":"1","UniqueId":"OR:wt.part.WTPart:119312","WcNumber":"WCDS000247","VariantId":"A","Name":"oil_strainer.prt"}],"WalkDistance":0,"TargetTools":[{"UniqueId":"VR:com.ptc.windchill.mpml.resource.MPMTooling:310241","isMonumental":true,"WcNumber":"0000000382","Name":"Drill Machine"},{"UniqueId":"VR:com.ptc.windchill.mpml.resource.MPMTooling:310255","isMonumental":false,"WcNumber":"0000000383","Name":"Fixture - Drill"}],"Duration":100,"VariantId":null,"TargetWorkers":[{"Role":"Assembler","UniqueId":"VR:com.ptc.windchill.mpml.resource.MPMSkill:300194","WcNumber":"0000000365","Name":"Assembler"}],"Name":"Name_0010"}],"Name":"Work Center 001"}],"Name":"Line 01"}]}],"LaunchParameters":{"plantOid":"VR:com.ptc.windchill.mpml.resource.MPMPlant:300106","wcServerURL":"http://augm01.aug.com:81/Windchill/","processPlanId":"VR:com.ptc.windchill.mpml.processplan.MPMProcessPlan:300993","containerId":"OR:wt.pdmlink.PDMLinkProduct:105583","processPlanNavigationCriteriaId":"OR:wt.filter.NavigationCriteria:301411"}}'; // Your JSON string here

    //var sampleJson = '{"Factories":[{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMPlant:404891","VersionId":null,"VariantId":null,"Name":"Pune","Lines":[{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404915","VersionId":"1","VariantId":"A","Name":"Line1","Cells":[{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404996","VersionId":"1","VariantId":"A","Name":"WS1","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:429524","VersionId":null,"VariantId":null,"Name":"Name_0020","Duration":200,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[{"UniqueId":"OR:wt.part.WTPart:119451","VersionId":"1","VariantId":"A","Name":"01-2_valve_timing_sprocket.prt","WcNumber":"WCDS000450"},{"UniqueId":"OR:wt.part.WTPart:119374","VersionId":"1","VariantId":"A","Name":"01-2_damper_pulley.prt","WcNumber":"WCDS000648"},{"UniqueId":"OR:wt.part.WTPart:119423","VersionId":"1","VariantId":"A","Name":"01-2_piston.asm","WcNumber":"WCDS000652"}]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404982","VersionId":"1","VariantId":"A","Name":"WS_test","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:429476","VersionId":null,"VariantId":null,"Name":"Name_0010","Duration":100,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[{"UniqueId":"OR:wt.part.WTPart:119447","VersionId":"1","VariantId":"A","Name":"01-2_crankshaft.prt","WcNumber":"WCDS000328"},{"UniqueId":"OR:wt.part.WTPart:119389","VersionId":"1","VariantId":"A","Name":"connecting_rod.asm","WcNumber":"WCDS000349"}]}]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404915","VersionId":"1","VariantId":"A","Name":"Line1","Cells":[{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404996","VersionId":"1","VariantId":"A","Name":"WS1","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:429524","VersionId":null,"VariantId":null,"Name":"Name_0020","Duration":200,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[{"UniqueId":"OR:wt.part.WTPart:119451","VersionId":"1","VariantId":"A","Name":"01-2_valve_timing_sprocket.prt","WcNumber":"WCDS000450"},{"UniqueId":"OR:wt.part.WTPart:119374","VersionId":"1","VariantId":"A","Name":"01-2_damper_pulley.prt","WcNumber":"WCDS000648"},{"UniqueId":"OR:wt.part.WTPart:119423","VersionId":"1","VariantId":"A","Name":"01-2_piston.asm","WcNumber":"WCDS000652"}]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404982","VersionId":"1","VariantId":"A","Name":"WS","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:429476","VersionId":null,"VariantId":null,"Name":"Name_0010","Duration":100,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[{"UniqueId":"OR:wt.part.WTPart:119447","VersionId":"1","VariantId":"A","Name":"01-2_crankshaft.prt","WcNumber":"WCDS000328"},{"UniqueId":"OR:wt.part.WTPart:119389","VersionId":"1","VariantId":"A","Name":"connecting_rod.asm","WcNumber":"WCDS000349"}]}]}]}]}],"LaunchParameters":{"plantOid":"com.ptc.windchill.mpml.resource.MPMPlant:404891","wcServerURL":"http://augm01.aug.com/Windchill/","processPlanId":"com.ptc.windchill.mpml.processplan.MPMProcessPlan:429502","containerId":"OR:wt.pdmlink.PDMLinkProduct:161390","processPlanNavigationCriteriaId":null}}';
    // var sampleJson = '{"Factories":[{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMPlant:404891","VersionId":null,"VariantId":null,"Name":"Factory_1","Lines":[{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404915","VersionId":"1","VariantId":"A","Name":"Line1","Cells":[{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404996","VersionId":"1","VariantId":"A","Name":"F1_L1_WS_1","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:429524","VersionId":null,"VariantId":null,"Name":"Name_0020","Duration":100,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[{"UniqueId":"OR:wt.part.WTPart:119451","VersionId":"1","VariantId":"A","Name":"01-2_valve_timing_sprocket.prt","WcNumber":"WCDS000450"},{"UniqueId":"OR:wt.part.WTPart:119374","VersionId":"1","VariantId":"A","Name":"01-2_damper_pulley.prt","WcNumber":"WCDS000648"},{"UniqueId":"OR:wt.part.WTPart:119423","VersionId":"1","VariantId":"A","Name":"01-2_piston.asm","WcNumber":"WCDS000652"}]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404982","VersionId":"1","VariantId":"A","Name":"F1_L1_WS_2","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:429476","VersionId":null,"VariantId":null,"Name":"Name_0010","Duration":200,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[{"UniqueId":"OR:wt.part.WTPart:119447","VersionId":"1","VariantId":"A","Name":"01-2_crankshaft.prt","WcNumber":"WCDS000328"},{"UniqueId":"OR:wt.part.WTPart:119389","VersionId":"1","VariantId":"A","Name":"connecting_rod.asm","WcNumber":"WCDS000349"}]}]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404915","VersionId":"1","VariantId":"A","Name":"Line1","Cells":[{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404996","VersionId":"1","VariantId":"A","Name":"F1_L2_WS_1","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:429524","VersionId":null,"VariantId":null,"Name":"Name_0020","Duration":200,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[{"UniqueId":"OR:wt.part.WTPart:119451","VersionId":"1","VariantId":"A","Name":"01-2_valve_timing_sprocket.prt","WcNumber":"WCDS000450"},{"UniqueId":"OR:wt.part.WTPart:119374","VersionId":"1","VariantId":"A","Name":"01-2_damper_pulley.prt","WcNumber":"WCDS000648"},{"UniqueId":"OR:wt.part.WTPart:119423","VersionId":"1","VariantId":"A","Name":"01-2_piston.asm","WcNumber":"WCDS000652"}]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404982","VersionId":"1","VariantId":"A","Name":"F1_L2_WS_2","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:429476","VersionId":null,"VariantId":null,"Name":"Name_0010","Duration":100,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[{"UniqueId":"OR:wt.part.WTPart:119447","VersionId":"1","VariantId":"A","Name":"01-2_crankshaft.prt","WcNumber":"WCDS000328"},{"UniqueId":"OR:wt.part.WTPart:119389","VersionId":"1","VariantId":"A","Name":"connecting_rod.asm","WcNumber":"WCDS000349"}]}]}]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMPlant:404891","VersionId":null,"VariantId":null,"Name":"Factory_2","Lines":[{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404915","VersionId":"1","VariantId":"A","Name":"Line1","Cells":[{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404996","VersionId":"1","VariantId":"A","Name":"F2_L1_WS_1","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:429524","VersionId":null,"VariantId":null,"Name":"Name_0020","Duration":500,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[{"UniqueId":"OR:wt.part.WTPart:119451","VersionId":"1","VariantId":"A","Name":"01-2_valve_timing_sprocket.prt","WcNumber":"WCDS000450"},{"UniqueId":"OR:wt.part.WTPart:119374","VersionId":"1","VariantId":"A","Name":"01-2_damper_pulley.prt","WcNumber":"WCDS000648"},{"UniqueId":"OR:wt.part.WTPart:119423","VersionId":"1","VariantId":"A","Name":"01-2_piston.asm","WcNumber":"WCDS000652"}]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404982","VersionId":"1","VariantId":"A","Name":"F1_L1_WS_2","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:429476","VersionId":null,"VariantId":null,"Name":"Name_0010","Duration":200,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[{"UniqueId":"OR:wt.part.WTPart:119447","VersionId":"1","VariantId":"A","Name":"01-2_crankshaft.prt","WcNumber":"WCDS000328"},{"UniqueId":"OR:wt.part.WTPart:119389","VersionId":"1","VariantId":"A","Name":"connecting_rod.asm","WcNumber":"WCDS000349"}]}]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404915","VersionId":"1","VariantId":"A","Name":"Line1","Cells":[{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404996","VersionId":"1","VariantId":"A","Name":"F2_L2_WS_1","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:429524","VersionId":null,"VariantId":null,"Name":"Name_0020","Duration":200,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[{"UniqueId":"OR:wt.part.WTPart:119451","VersionId":"1","VariantId":"A","Name":"01-2_valve_timing_sprocket.prt","WcNumber":"WCDS000450"},{"UniqueId":"OR:wt.part.WTPart:119374","VersionId":"1","VariantId":"A","Name":"01-2_damper_pulley.prt","WcNumber":"WCDS000648"},{"UniqueId":"OR:wt.part.WTPart:119423","VersionId":"1","VariantId":"A","Name":"01-2_piston.asm","WcNumber":"WCDS000652"}]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:404982","VersionId":"1","VariantId":"A","Name":"F2_L2_WS_2","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:429476","VersionId":null,"VariantId":null,"Name":"Name_0010","Duration":900,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[{"UniqueId":"OR:wt.part.WTPart:119447","VersionId":"1","VariantId":"A","Name":"01-2_crankshaft.prt","WcNumber":"WCDS000328"},{"UniqueId":"OR:wt.part.WTPart:119389","VersionId":"1","VariantId":"A","Name":"connecting_rod.asm","WcNumber":"WCDS000349"}]}]}]}]}],"LaunchParameters":{"plantOid":"com.ptc.windchill.mpml.resource.MPMPlant:404891","wcServerURL":"http://augm01.aug.com/Windchill/","processPlanId":"com.ptc.windchill.mpml.processplan.MPMProcessPlan:429502","containerId":"OR:wt.pdmlink.PDMLinkProduct:161390","processPlanNavigationCriteriaId":null}}';
    // var sampleJson = '{ "Factories" : [ { "UniqueId" : "OR:com.ptc.windchill.mpml.resource.MPMPlant:404891", "VersionId" : null, "VariantId" : null, "Name" : "Pune", "Lines" : [ { "UniqueId" : "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:479841", "VersionId" : "1", "VariantId" : "A", "Name" : "SS-Line01", "Cells" : [ { "UniqueId" : "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:484062", "VersionId" : "1", "VariantId" : "A", "Name" : "Station SS001", "Operations" : [ { "UniqueId" : "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484460", "VersionId" : null, "VariantId" : null, "Name" : "Name_0020", "Duration" : 100.0, "WalkDistance" : 0.0, "Type" : "Assemble", "Activities" : [ ], "TargetWorkers" : [ { "Name" : "Assembler A", "WcNumber" : "0000000541", "UniqueId" : "VR:com.ptc.windchill.mpml.resource.MPMSkill:479880", "Role" : "Assembler" } ], "TargetTools" : [ { "UniqueId" : "VR:com.ptc.windchill.mpml.resource.MPMTooling:484031", "isMonumental" : true, "WcNumber" : "0000000563", "Name" : "Drill" } ], "TargetParts" : [ { "UniqueId" : "OR:wt.part.WTPart:484331", "VersionId" : "1", "VariantId" : "A", "Name" : "C2", "WcNumber" : "0000000566" } ] }, { "UniqueId" : "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484401", "VersionId" : null, "VariantId" : null, "Name" : "Name_0010", "Duration" : 50.0, "WalkDistance" : 0.0, "Type" : "Assemble", "Activities" : [ ], "TargetWorkers" : [ { "Name" : "Assembler A", "WcNumber" : "0000000541", "UniqueId" : "VR:com.ptc.windchill.mpml.resource.MPMSkill:479880", "Role" : "Assembler" } ], "TargetTools" : [ { "UniqueId" : "VR:com.ptc.windchill.mpml.resource.MPMTooling:484031", "isMonumental" : true, "WcNumber" : "0000000563", "Name" : "Drill" } ], "TargetParts" : [ { "UniqueId" : "OR:wt.part.WTPart:484323", "VersionId" : "1", "VariantId" : "A", "Name" : "C1", "WcNumber" : "0000000565" } ] } ] }, { "UniqueId" : "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:480428", "VersionId" : "1", "VariantId" : "A", "Name" : "Station SS003", "Operations" : [ { "UniqueId" : "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484693", "VersionId" : null, "VariantId" : null, "Name" : "Name_0060", "Duration" : 48.0, "WalkDistance" : 0.0, "Type" : "Assemble", "Activities" : [ ], "TargetWorkers" : [ ], "TargetTools" : [ ], "TargetParts" : [ { "UniqueId" : "OR:wt.part.WTPart:484613", "VersionId" : "1", "VariantId" : "A", "Name" : "C6", "WcNumber" : "0000000570" }, { "UniqueId" : "OR:wt.part.WTPart:484629", "VersionId" : "1", "VariantId" : "A", "Name" : "C8", "WcNumber" : "0000000572" }, { "UniqueId" : "OR:wt.part.WTPart:484621", "VersionId" : "1", "VariantId" : "A", "Name" : "C7", "WcNumber" : "0000000571" } ] } ] }, { "UniqueId" : "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:480417", "VersionId" : "1", "VariantId" : "A", "Name" : "Station SS002", "Operations" : [ { "UniqueId" : "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484756", "VersionId" : null, "VariantId" : null, "Name" : "Name_0050", "Duration" : 90.0, "WalkDistance" : 0.0, "Type" : "Assemble", "Activities" : [ ], "TargetWorkers" : [ { "Name" : "Mechinist", "WcNumber" : "0000000562", "UniqueId" : "VR:com.ptc.windchill.mpml.resource.MPMSkill:483629", "Role" : "Machinist" } ], "TargetTools" : [ ], "TargetParts" : [ { "UniqueId" : "OR:wt.part.WTPart:484637", "VersionId" : "1", "VariantId" : "A", "Name" : "C9", "WcNumber" : "0000000573" }, { "UniqueId" : "OR:wt.part.WTPart:484355", "VersionId" : "1", "VariantId" : "A", "Name" : "C5", "WcNumber" : "0000000569" } ] }, { "UniqueId" : "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484788", "VersionId" : null, "VariantId" : null, "Name" : "Name_0040", "Duration" : 70.0, "WalkDistance" : 0.0, "Type" : "Assemble", "Activities" : [ ], "TargetWorkers" : [ { "Name" : "Mechinist", "WcNumber" : "0000000562", "UniqueId" : "VR:com.ptc.windchill.mpml.resource.MPMSkill:483629", "Role" : "Machinist" }, { "Name" : "Inspector", "WcNumber" : "0000000561", "UniqueId" : "VR:com.ptc.windchill.mpml.resource.MPMSkill:483618", "Role" : "Inspector" } ], "TargetTools" : [ ], "TargetParts" : [ { "UniqueId" : "OR:wt.part.WTPart:484645", "VersionId" : "1", "VariantId" : "A", "Name" : "C10", "WcNumber" : "0000000574" }, { "UniqueId" : "OR:wt.part.WTPart:484347", "VersionId" : "1", "VariantId" : "A", "Name" : "C4", "WcNumber" : "0000000568" } ] }, { "UniqueId" : "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484491", "VersionId" : null, "VariantId" : null, "Name" : "Name_0030", "Duration" : 300.0, "WalkDistance" : 0.0, "Type" : "Assemble", "Activities" : [ ], "TargetWorkers" : [ { "Name" : "Inspector", "WcNumber" : "0000000561", "UniqueId" : "VR:com.ptc.windchill.mpml.resource.MPMSkill:483618", "Role" : "Inspector" } ], "TargetTools" : [ ], "TargetParts" : [ { "UniqueId" : "OR:wt.part.WTPart:484339", "VersionId" : "1", "VariantId" : "A", "Name" : "C3", "WcNumber" : "0000000567" } ] } ] } ] } ] } ], "LaunchParameters" : { "plantOid" : "VR:com.ptc.windchill.mpml.resource.MPMPlant:376016", "wcServerURL" : "http://augm01.aug.com/Windchill/", "processPlanId" : "VR:com.ptc.windchill.mpml.processplan.MPMProcessPlan:448762", "containerId" : "OR:wt.pdmlink.PDMLinkProduct:161390", "processPlanNavigationCriteriaId" : "OR:wt.filter.NavigationCriteria:414808" } }'     

    var sampleJsonSmall2 = `{
  "Factories": [
    {
      "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMPlant:404891",
      "VersionId": null,
      "VariantId": null,
      "Name": "Pune",
      "Lines": [
        {
          "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:479841",
          "VersionId": "1",
          "VariantId": "A",
          "Name": "First_SS-Line01",
          "Cells": [
            {
              "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:480428",
              "VersionId": "1",
              "VariantId": "A",
              "Name": "Station SS003",
              "Operations": [
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484693",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0060P",
                  "Duration": 60.0,
                  "VA": 10.0,
                  "NVA": 20.0,
                  "SVA": 30.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484613",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C6",
                      "WcNumber": "0000000570"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:484629",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C8",
                      "WcNumber": "0000000572"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:484621",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C7",
                      "WcNumber": "0000000571"
                    }
                  ]
                }
              ]
            },
            {
              "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:480417",
              "VersionId": "1",
              "VariantId": "A",
              "Name": "Station SS002",
              "Operations": [
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484756",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0050P",
                  "Duration": 70.0,
                  "VA": 20.0,
                  "NVA": 20.0,
                  "SVA": 30.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Mechinist",
                      "WcNumber": "0000000562",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:483629",
                      "Role": "Machinist"
                    }
                  ],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484637",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C9",
                      "WcNumber": "0000000573"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:484355",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C5",
                      "WcNumber": "0000000569"
                    }
                  ]
                },
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484788",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0040P",
                  "Duration": 30.0,
                  "VA": 10.0,
                  "NVA": 15,
                  "SVA": 5,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Mechinist",
                      "WcNumber": "0000000562",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:483629",
                      "Role": "Machinist"
                    },
                    {
                      "Name": "Inspector",
                      "WcNumber": "0000000561",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:483618",
                      "Role": "Inspector"
                    }
                  ],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484645",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C10",
                      "WcNumber": "0000000574"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:484347",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C4",
                      "WcNumber": "0000000568"
                    }
                  ]
                },
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484491",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0030P",
                  "Duration": 120.0,
                  "VA": 50.0,
                  "NVA": 50.0,
                  "SVA": 20.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Inspector",
                      "WcNumber": "0000000561",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:483618",
                      "Role": "Inspector"
                    }
                  ],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484339",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C3",
                      "WcNumber": "0000000567"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:479866",
          "VersionId": "1",
          "VariantId": "A",
          "Name": "Second-SS-Line01",
          "Cells": [
            {
              "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:484066",
              "VersionId": "1",
              "VariantId": "A",
              "Name": "Station SS001",
              "Operations": [
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484468",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0020P",
                  "Duration": 200.0,
                  "VA": 80.0,
                  "NVA": 60.0,
                  "SVA": 60.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Assembler A",
                      "WcNumber": "0000000541",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:479881",
                      "Role": "Assembler"
                    }
                  ],
                  "TargetTools": [
                    {
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMTooling:4840399",
                      "isMonumental": true,
                      "WcNumber": "0000000563",
                      "Name": "Drill"
                    }
                  ],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484331",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C2",
                      "WcNumber": "0000000566"
                    }
                  ]
                },
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484401978",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0010P",
                  "Duration": 100.0,
                  "VA": 20.0,
                  "NVA": 40.0,
                  "SVA": 40.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Assembler A",
                      "WcNumber": "0000000541",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:479884510",
                      "Role": "Assembler"
                    }
                  ],
                  "TargetTools": [
                    {
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMTooling:484457031",
                      "isMonumental": true,
                      "WcNumber": "0000000563",
                      "Name": "Drill"
                    }
                  ],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484465323",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C1",
                      "WcNumber": "0000000565"
                    }
                  ]
                }
              ]
            },
            {
              "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:480451428",
              "VersionId": "1",
              "VariantId": "A",
              "Name": "Station SS003",
              "Operations": [
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484457693",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0060P",
                  "Duration": 80.0,
                  "VA": 10.0,
                  "NVA": 30.0,
                  "SVA": 40.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484616543",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C6",
                      "WcNumber": "0000000570"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:4846123629",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C8",
                      "WcNumber": "0000000572"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:48445855621",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C7",
                      "WcNumber": "0000000571"
                    }
                  ]
                }
              ]
            },
            {
              "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:4811510417",
              "VersionId": "1",
              "VariantId": "A",
              "Name": "Station SS002",
              "Operations": [
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:4847651456",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0050P",
                  "Duration": 90.0,
                  "VA": 25.0,
                  "NVA": 30.0,
                  "SVA": 35.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Mechinist",
                      "WcNumber": "0000000562",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:4835414629",
                      "Role": "Machinist"
                    }
                  ],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484584637",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C9",
                      "WcNumber": "0000000573"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:484547355",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C5",
                      "WcNumber": "0000000569"
                    }
                  ]
                },
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484788457",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0040P",
                  "Duration": 50.0,
                  "VA": 20.0,
                  "NVA": 15.0,
                  "SVA": 15.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Mechinist",
                      "WcNumber": "0000000562",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:483625479",
                      "Role": "Machinist"
                    },
                    {
                      "Name": "Inspector",
                      "WcNumber": "0000000561",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:4836651418",
                      "Role": "Inspector"
                    }
                  ],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484665445",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C10",
                      "WcNumber": "0000000574"
                    },
                    {
                      "UniqueId": "OR:wt.part.WTPart:484451347",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C4",
                      "WcNumber": "0000000568"
                    }
                  ]
                },
                {
                  "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:4844945141",
                  "VersionId": null,
                  "VariantId": null,
                  "Name": "Name_0030P",
                  "Duration": 180.0,
                  "VA": 100.0,
                  "NVA": 40.0,
                  "SVA": 40.0,
                  "WalkDistance": 0.0,
                  "Type": "Assemble",
                  "Activities": [],
                  "TargetWorkers": [
                    {
                      "Name": "Inspector",
                      "WcNumber": "0000000561",
                      "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:4834574618",
                      "Role": "Inspector"
                    }
                  ],
                  "TargetTools": [],
                  "TargetParts": [
                    {
                      "UniqueId": "OR:wt.part.WTPart:484451339",
                      "VersionId": "1",
                      "VariantId": "A",
                      "Name": "C3",
                      "WcNumber": "0000000567"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "LaunchParameters": {
    "plantOid": "VR:com.ptc.windchill.mpml.resource.MPMPlant:376016",
    "wcServerURL": "http://augm01.aug.com/Windchill/",
    "processPlanId": "VR:com.ptc.windchill.mpml.processplan.MPMProcessPlan:448762",
    "containerId": "OR:wt.pdmlink.PDMLinkProduct:161390",
    "processPlanNavigationCriteriaId": "OR:wt.filter.NavigationCriteria:414808"
  }
  }
  `

  var sampleJsonSmall3 = `{
    "Factories": [
      {
        "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMPlant:404891",
        "VersionId": null,
        "VariantId": null,
        "Name": "Pune",
        "Lines": [
          {
            "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:479841",
            "VersionId": "1",
            "VariantId": "A",
            "Name": "First_SS-Line01",
            "Cells": [
              {
                "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:480428",
                "VersionId": "1",
                "VariantId": "A",
                "Name": "Station SS003",
                "Operations": [
                  {
                    "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484693",
                    "VersionId": null,
                    "VariantId": null,
                    "Name": "Name_0060P",
                    "Duration": 60.0,
                    "VA": 10.0,
                    "NVA": 20.0,
                    "SVA": 30.0,
                    "WalkDistance": 0.0,
                    "Type": "Assemble",
                    "Activities": [],
                    "TargetWorkers": [],
                    "TargetTools": [],
                    "TargetParts": [
                      {
                        "UniqueId": "OR:wt.part.WTPart:484613",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C6",
                        "WcNumber": "0000000570"
                      },
                      {
                        "UniqueId": "OR:wt.part.WTPart:484629",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C8",
                        "WcNumber": "0000000572"
                      },
                      {
                        "UniqueId": "OR:wt.part.WTPart:484621",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C7",
                        "WcNumber": "0000000571"
                      }
                    ]
                  }
                ]
              },
              {
                "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:480417",
                "VersionId": "1",
                "VariantId": "A",
                "Name": "Station SS002",
                "Operations": [
                  {
                    "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484756",
                    "VersionId": null,
                    "VariantId": null,
                    "Name": "Name_0050P",
                    "Duration": 70.0,
                    "VA": 20.0,
                    "NVA": 20.0,
                    "SVA": 30.0,
                    "WalkDistance": 0.0,
                    "Type": "Assemble",
                    "Activities": [],
                    "TargetWorkers": [
                      {
                        "Name": "Mechinist",
                        "WcNumber": "0000000562",
                        "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:483629",
                        "Role": "Machinist"
                      }
                    ],
                    "TargetTools": [],
                    "TargetParts": [
                      {
                        "UniqueId": "OR:wt.part.WTPart:484637",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C9",
                        "WcNumber": "0000000573"
                      },
                      {
                        "UniqueId": "OR:wt.part.WTPart:484355",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C5",
                        "WcNumber": "0000000569"
                      }
                    ]
                  },
                  {
                    "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484788",
                    "VersionId": null,
                    "VariantId": null,
                    "Name": "Name_0040P",
                    "Duration": 30.0,
                    "VA": 10.0,
                    "NVA": 15,
                    "SVA": 5,
                    "WalkDistance": 0.0,
                    "Type": "Assemble",
                    "Activities": [],
                    "TargetWorkers": [
                      {
                        "Name": "Mechinist",
                        "WcNumber": "0000000562",
                        "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:483629",
                        "Role": "Machinist"
                      },
                      {
                        "Name": "Inspector",
                        "WcNumber": "0000000561",
                        "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:483618",
                        "Role": "Inspector"
                      }
                    ],
                    "TargetTools": [],
                    "TargetParts": [
                      {
                        "UniqueId": "OR:wt.part.WTPart:484645",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C10",
                        "WcNumber": "0000000574"
                      },
                      {
                        "UniqueId": "OR:wt.part.WTPart:484347",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C4",
                        "WcNumber": "0000000568"
                      }
                    ]
                  },
                  {
                    "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484491",
                    "VersionId": null,
                    "VariantId": null,
                    "Name": "Name_0030P",
                    "Duration": 120.0,
                    "VA": 50.0,
                    "NVA": 50.0,
                    "SVA": 20.0,
                    "WalkDistance": 0.0,
                    "Type": "Assemble",
                    "Activities": [],
                    "TargetWorkers": [
                      {
                        "Name": "Inspector",
                        "WcNumber": "0000000561",
                        "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:483618",
                        "Role": "Inspector"
                      }
                    ],
                    "TargetTools": [],
                    "TargetParts": [
                      {
                        "UniqueId": "OR:wt.part.WTPart:484339",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C3",
                        "WcNumber": "0000000567"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:479866",
            "VersionId": "1",
            "VariantId": "A",
            "Name": "Second-SS-Line01",
            "Cells": [
              {
                "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:484066",
                "VersionId": "1",
                "VariantId": "A",
                "Name": "Station SS001",
                "Operations": [
                  {
                    "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484468",
                    "VersionId": null,
                    "VariantId": null,
                    "Name": "Name_0020P",
                    "Duration": 200.0,
                    "VA": 80.0,
                    "NVA": 60.0,
                    "SVA": 60.0,
                    "WalkDistance": 0.0,
                    "Type": "Assemble",
                    "Activities": [],
                    "TargetWorkers": [
                      {
                        "Name": "Assembler A",
                        "WcNumber": "0000000541",
                        "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:479881",
                        "Role": "Assembler"
                      }
                    ],
                    "TargetTools": [
                      {
                        "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMTooling:4840399",
                        "isMonumental": true,
                        "WcNumber": "0000000563",
                        "Name": "Drill"
                      }
                    ],
                    "TargetParts": [
                      {
                        "UniqueId": "OR:wt.part.WTPart:484331",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C2",
                        "WcNumber": "0000000566"
                      }
                    ]
                  },
                  {
                    "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484401978",
                    "VersionId": null,
                    "VariantId": null,
                    "Name": "Name_0010P",
                    "Duration": 100.0,
                    "VA": 20.0,
                    "NVA": 40.0,
                    "SVA": 40.0,
                    "WalkDistance": 0.0,
                    "Type": "Assemble",
                    "Activities": [],
                    "TargetWorkers": [
                      {
                        "Name": "Assembler A",
                        "WcNumber": "0000000541",
                        "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:479884510",
                        "Role": "Assembler"
                      }
                    ],
                    "TargetTools": [
                      {
                        "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMTooling:484457031",
                        "isMonumental": true,
                        "WcNumber": "0000000563",
                        "Name": "Drill"
                      }
                    ],
                    "TargetParts": [
                      {
                        "UniqueId": "OR:wt.part.WTPart:484465323",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C1",
                        "WcNumber": "0000000565"
                      }
                    ]
                  }
                ]
              },
              {
                "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:480451428",
                "VersionId": "1",
                "VariantId": "A",
                "Name": "Station SS003",
                "Operations": [
                  {
                    "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484457693",
                    "VersionId": null,
                    "VariantId": null,
                    "Name": "Name_0060P",
                    "Duration": 80.0,
                    "VA": 10.0,
                    "NVA": 30.0,
                    "SVA": 40.0,
                    "WalkDistance": 0.0,
                    "Type": "Assemble",
                    "Activities": [],
                    "TargetWorkers": [],
                    "TargetTools": [],
                    "TargetParts": [
                      {
                        "UniqueId": "OR:wt.part.WTPart:484616543",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C6",
                        "WcNumber": "0000000570"
                      },
                      {
                        "UniqueId": "OR:wt.part.WTPart:4846123629",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C8",
                        "WcNumber": "0000000572"
                      },
                      {
                        "UniqueId": "OR:wt.part.WTPart:48445855621",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C7",
                        "WcNumber": "0000000571"
                      }
                    ]
                  }
                ]
              },
              {
                "UniqueId": "OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:4811510417",
                "VersionId": "1",
                "VariantId": "A",
                "Name": "Station SS002",
                "Operations": [
                  {
                    "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:4847651456",
                    "VersionId": null,
                    "VariantId": null,
                    "Name": "Name_0050P",
                    "Duration": 90.0,
                    "VA": 25.0,
                    "NVA": 30.0,
                    "SVA": 35.0,
                    "WalkDistance": 0.0,
                    "Type": "Assemble",
                    "Activities": [],
                    "TargetWorkers": [
                      {
                        "Name": "Mechinist",
                        "WcNumber": "0000000562",
                        "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:4835414629",
                        "Role": "Machinist"
                      }
                    ],
                    "TargetTools": [],
                    "TargetParts": [
                      {
                        "UniqueId": "OR:wt.part.WTPart:484584637",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C9",
                        "WcNumber": "0000000573"
                      },
                      {
                        "UniqueId": "OR:wt.part.WTPart:484547355",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C5",
                        "WcNumber": "0000000569"
                      }
                    ]
                  },
                  {
                    "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:484788457",
                    "VersionId": null,
                    "VariantId": null,
                    "Name": "Name_0040P",
                    "Duration": 50.0,
                    "VA": 20.0,
                    "NVA": 15.0,
                    "SVA": 15.0,
                    "WalkDistance": 0.0,
                    "Type": "Assemble",
                    "Activities": [],
                    "TargetWorkers": [
                      {
                        "Name": "Mechinist",
                        "WcNumber": "0000000562",
                        "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:483625479",
                        "Role": "Machinist"
                      },
                      {
                        "Name": "Inspector",
                        "WcNumber": "0000000561",
                        "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:4836651418",
                        "Role": "Inspector"
                      }
                    ],
                    "TargetTools": [],
                    "TargetParts": [
                      {
                        "UniqueId": "OR:wt.part.WTPart:484665445",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C10",
                        "WcNumber": "0000000574"
                      },
                      {
                        "UniqueId": "OR:wt.part.WTPart:484451347",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C4",
                        "WcNumber": "0000000568"
                      }
                    ]
                  },
                  {
                    "UniqueId": "OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:4844945141",
                    "VersionId": null,
                    "VariantId": null,
                    "Name": "Name_0030P",
                    "Duration": 180.0,
                    "VA": 100.0,
                    "NVA": 40.0,
                    "SVA": 40.0,
                    "WalkDistance": 0.0,
                    "Type": "Assemble",
                    "Activities": [],
                    "TargetWorkers": [
                      {
                        "Name": "Inspector",
                        "WcNumber": "0000000561",
                        "UniqueId": "VR:com.ptc.windchill.mpml.resource.MPMSkill:4834574618",
                        "Role": "Inspector"
                      }
                    ],
                    "TargetTools": [],
                    "TargetParts": [
                      {
                        "UniqueId": "OR:wt.part.WTPart:484451339",
                        "VersionId": "1",
                        "VariantId": "A",
                        "Name": "C3",
                        "WcNumber": "0000000567"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "LaunchParameters": {
      "plantOid": "VR:com.ptc.windchill.mpml.resource.MPMPlant:376016",
      "wcServerURL": "http://augm01.aug.com/Windchill/",
      "processPlanId": "VR:com.ptc.windchill.mpml.processplan.MPMProcessPlan:448762",
      "containerId": "OR:wt.pdmlink.PDMLinkProduct:161390",
      "processPlanNavigationCriteriaId": "OR:wt.filter.NavigationCriteria:414808"
    }
    }
    `
    let sampleJson = '{"Factories":[{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMPlant:630719","VersionId":null,"VariantId":null,"Name":"Berlin","Lines":[{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:630679","VersionId":"1","VariantId":"A","Name":"Line 01","Cells":[{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:631479","VersionId":"1","VariantId":"A","Name":"Station 13","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655749","VersionId":null,"VariantId":null,"Name":"Name_1100","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655750","VersionId":null,"VariantId":null,"Name":"Name_1230","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655751","VersionId":null,"VariantId":null,"Name":"Name_1120","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655752","VersionId":null,"VariantId":null,"Name":"Name_1170","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655746","VersionId":null,"VariantId":null,"Name":"Name_1110","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655747","VersionId":null,"VariantId":null,"Name":"Name_1160","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655748","VersionId":null,"VariantId":null,"Name":"Name_1210","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655757","VersionId":null,"VariantId":null,"Name":"Name_1180","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655758","VersionId":null,"VariantId":null,"Name":"Name_1150","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655759","VersionId":null,"VariantId":null,"Name":"Name_1200","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655760","VersionId":null,"VariantId":null,"Name":"Name_1250","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655753","VersionId":null,"VariantId":null,"Name":"Name_1220","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655754","VersionId":null,"VariantId":null,"Name":"Name_1190","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655755","VersionId":null,"VariantId":null,"Name":"Name_1240","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655756","VersionId":null,"VariantId":null,"Name":"Name_1130","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:655761","VersionId":null,"VariantId":null,"Name":"Name_1140","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:631302","VersionId":"1","VariantId":"A","Name":"Station 03","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645060","VersionId":null,"VariantId":null,"Name":"Name_0700","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645059","VersionId":null,"VariantId":null,"Name":"Name_0640","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645058","VersionId":null,"VariantId":null,"Name":"Name_0710","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645057","VersionId":null,"VariantId":null,"Name":"Name_0750","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645064","VersionId":null,"VariantId":null,"Name":"Name_0650","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645063","VersionId":null,"VariantId":null,"Name":"Name_0720","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645062","VersionId":null,"VariantId":null,"Name":"Name_0660","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645061","VersionId":null,"VariantId":null,"Name":"Name_0760","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645065","VersionId":null,"VariantId":null,"Name":"Name_0770","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645052","VersionId":null,"VariantId":null,"Name":"Name_0740","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645051","VersionId":null,"VariantId":null,"Name":"Name_0680","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645056","VersionId":null,"VariantId":null,"Name":"Name_0690","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645055","VersionId":null,"VariantId":null,"Name":"Name_0630","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645054","VersionId":null,"VariantId":null,"Name":"Name_0730","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645053","VersionId":null,"VariantId":null,"Name":"Name_0670","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:631653","VersionId":"1","VariantId":"A","Name":"Station 07","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645480","VersionId":null,"VariantId":null,"Name":"Name_1580","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645479","VersionId":null,"VariantId":null,"Name":"Name_1640","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645484","VersionId":null,"VariantId":null,"Name":"Name_1590","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645483","VersionId":null,"VariantId":null,"Name":"Name_1660","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645482","VersionId":null,"VariantId":null,"Name":"Name_1690","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645481","VersionId":null,"VariantId":null,"Name":"Name_1630","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645488","VersionId":null,"VariantId":null,"Name":"Name_1570","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645487","VersionId":null,"VariantId":null,"Name":"Name_1600","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645486","VersionId":null,"VariantId":null,"Name":"Name_1670","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645485","VersionId":null,"VariantId":null,"Name":"Name_1650","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645492","VersionId":null,"VariantId":null,"Name":"Name_1680","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645491","VersionId":null,"VariantId":null,"Name":"Name_1620","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645490","VersionId":null,"VariantId":null,"Name":"Name_1560","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:645489","VersionId":null,"VariantId":null,"Name":"Name_1610","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:631912","VersionId":"1","VariantId":"A","Name":"Station 08","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:643732","VersionId":null,"VariantId":null,"Name":"Name_2010","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:643731","VersionId":null,"VariantId":null,"Name":"Name_2070","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:643730","VersionId":null,"VariantId":null,"Name":"Name_2020","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:643736","VersionId":null,"VariantId":null,"Name":"Name_1970","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:643735","VersionId":null,"VariantId":null,"Name":"Name_2080","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:643734","VersionId":null,"VariantId":null,"Name":"Name_2030","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:643733","VersionId":null,"VariantId":null,"Name":"Name_1980","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:643740","VersionId":null,"VariantId":null,"Name":"Name_2090","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:643739","VersionId":null,"VariantId":null,"Name":"Name_2040","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:643738","VersionId":null,"VariantId":null,"Name":"Name_1990","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:643737","VersionId":null,"VariantId":null,"Name":"Name_2100","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:643744","VersionId":null,"VariantId":null,"Name":"Name_2050","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:643743","VersionId":null,"VariantId":null,"Name":"Name_2000","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:643742","VersionId":null,"VariantId":null,"Name":"Name_2110","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:643741","VersionId":null,"VariantId":null,"Name":"Name_2060","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:632261","VersionId":"1","VariantId":"A","Name":"Station 18","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:646484","VersionId":null,"VariantId":null,"Name":"Name_2970","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:646483","VersionId":null,"VariantId":null,"Name":"Name_2920","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:646488","VersionId":null,"VariantId":null,"Name":"Name_2950","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:646487","VersionId":null,"VariantId":null,"Name":"Name_2980","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:646486","VersionId":null,"VariantId":null,"Name":"Name_2930","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:646485","VersionId":null,"VariantId":null,"Name":"Name_2990","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:646492","VersionId":null,"VariantId":null,"Name":"Name_2910","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:646491","VersionId":null,"VariantId":null,"Name":"Name_2940","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:646490","VersionId":null,"VariantId":null,"Name":"Name_2890","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:646489","VersionId":null,"VariantId":null,"Name":"Name_3000","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:646494","VersionId":null,"VariantId":null,"Name":"Name_2900","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:646493","VersionId":null,"VariantId":null,"Name":"Name_2960","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:631185","VersionId":"1","VariantId":"A","Name":"Station 15","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:654285","VersionId":null,"VariantId":null,"Name":"Name_0420","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:654286","VersionId":null,"VariantId":null,"Name":"Name_0360","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:654287","VersionId":null,"VariantId":null,"Name":"Name_0410","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:654288","VersionId":null,"VariantId":null,"Name":"Name_0320","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:654281","VersionId":null,"VariantId":null,"Name":"Name_0460","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:654282","VersionId":null,"VariantId":null,"Name":"Name_0400","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:654283","VersionId":null,"VariantId":null,"Name":"Name_0340","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:654284","VersionId":null,"VariantId":null,"Name":"Name_0450","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:654293","VersionId":null,"VariantId":null,"Name":"Name_0330","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:654294","VersionId":null,"VariantId":null,"Name":"Name_0380","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:654295","VersionId":null,"VariantId":null,"Name":"Name_0440","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:654289","VersionId":null,"VariantId":null,"Name":"Name_0430","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:654290","VersionId":null,"VariantId":null,"Name":"Name_0350","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:654291","VersionId":null,"VariantId":null,"Name":"Name_0370","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:654292","VersionId":null,"VariantId":null,"Name":"Name_0390","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:631539","VersionId":"1","VariantId":"A","Name":"Station 19","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652900","VersionId":null,"VariantId":null,"Name":"Name_1380","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652899","VersionId":null,"VariantId":null,"Name":"Name_1330","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652898","VersionId":null,"VariantId":null,"Name":"Name_1280","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652897","VersionId":null,"VariantId":null,"Name":"Name_1390","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652904","VersionId":null,"VariantId":null,"Name":"Name_1340","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652903","VersionId":null,"VariantId":null,"Name":"Name_1400","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652902","VersionId":null,"VariantId":null,"Name":"Name_1290","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652901","VersionId":null,"VariantId":null,"Name":"Name_1350","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652908","VersionId":null,"VariantId":null,"Name":"Name_1410","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652907","VersionId":null,"VariantId":null,"Name":"Name_1300","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652906","VersionId":null,"VariantId":null,"Name":"Name_1360","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652905","VersionId":null,"VariantId":null,"Name":"Name_1310","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652896","VersionId":null,"VariantId":null,"Name":"Name_1260","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652895","VersionId":null,"VariantId":null,"Name":"Name_1370","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652894","VersionId":null,"VariantId":null,"Name":"Name_1320","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:652893","VersionId":null,"VariantId":null,"Name":"Name_1270","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:631359","VersionId":"1","VariantId":"A","Name":"Station 10","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637284","VersionId":null,"VariantId":null,"Name":"Name_0850","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637283","VersionId":null,"VariantId":null,"Name":"Name_0880","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637282","VersionId":null,"VariantId":null,"Name":"Name_0910","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637281","VersionId":null,"VariantId":null,"Name":"Name_0940","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637286","VersionId":null,"VariantId":null,"Name":"Name_0900","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637285","VersionId":null,"VariantId":null,"Name":"Name_0930","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637280","VersionId":null,"VariantId":null,"Name":"Name_0860","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637279","VersionId":null,"VariantId":null,"Name":"Name_0890","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637278","VersionId":null,"VariantId":null,"Name":"Name_0920","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637277","VersionId":null,"VariantId":null,"Name":"Name_0870","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:636340","VersionId":null,"VariantId":null,"Name":"Name_0840","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:636339","VersionId":null,"VariantId":null,"Name":"Name_0790","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:636338","VersionId":null,"VariantId":null,"Name":"Name_0820","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:636344","VersionId":null,"VariantId":null,"Name":"Name_0800","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:636343","VersionId":null,"VariantId":null,"Name":"Name_0830","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:636342","VersionId":null,"VariantId":null,"Name":"Name_0780","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:636341","VersionId":null,"VariantId":null,"Name":"Name_0810","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:632126","VersionId":"1","VariantId":"A","Name":"Station 05","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637636","VersionId":null,"VariantId":null,"Name":"Name_2540","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637635","VersionId":null,"VariantId":null,"Name":"Name_2660","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637634","VersionId":null,"VariantId":null,"Name":"Name_2680","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637633","VersionId":null,"VariantId":null,"Name":"Name_2610","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637640","VersionId":null,"VariantId":null,"Name":"Name_2620","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637639","VersionId":null,"VariantId":null,"Name":"Name_2510","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637638","VersionId":null,"VariantId":null,"Name":"Name_2560","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637637","VersionId":null,"VariantId":null,"Name":"Name_2600","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637644","VersionId":null,"VariantId":null,"Name":"Name_2520","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637643","VersionId":null,"VariantId":null,"Name":"Name_2580","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637642","VersionId":null,"VariantId":null,"Name":"Name_2550","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637641","VersionId":null,"VariantId":null,"Name":"Name_2670","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637648","VersionId":null,"VariantId":null,"Name":"Name_2590","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637647","VersionId":null,"VariantId":null,"Name":"Name_2530","Duration":100,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637646","VersionId":null,"VariantId":null,"Name":"Name_2650","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637645","VersionId":null,"VariantId":null,"Name":"Name_2630","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:637649","VersionId":null,"VariantId":null,"Name":"Name_2640","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:631422","VersionId":"1","VariantId":"A","Name":"Station 16","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:638980","VersionId":null,"VariantId":null,"Name":"Name_1000","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:638979","VersionId":null,"VariantId":null,"Name":"Name_0950","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:638984","VersionId":null,"VariantId":null,"Name":"Name_1010","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:638983","VersionId":null,"VariantId":null,"Name":"Name_0960","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:638982","VersionId":null,"VariantId":null,"Name":"Name_1070","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:638981","VersionId":null,"VariantId":null,"Name":"Name_1050","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:638988","VersionId":null,"VariantId":null,"Name":"Name_0970","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:638987","VersionId":null,"VariantId":null,"Name":"Name_1080","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:638986","VersionId":null,"VariantId":null,"Name":"Name_1030","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:638985","VersionId":null,"VariantId":null,"Name":"Name_1060","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:638992","VersionId":null,"VariantId":null,"Name":"Name_1090","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:638991","VersionId":null,"VariantId":null,"Name":"Name_1040","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:638990","VersionId":null,"VariantId":null,"Name":"Name_0990","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:638989","VersionId":null,"VariantId":null,"Name":"Name_1020","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:638993","VersionId":null,"VariantId":null,"Name":"Name_0980","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:632189","VersionId":"1","VariantId":"A","Name":"Station 12","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639496","VersionId":null,"VariantId":null,"Name":"Name_2870","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639500","VersionId":null,"VariantId":null,"Name":"Name_2700","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639499","VersionId":null,"VariantId":null,"Name":"Name_2810","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639498","VersionId":null,"VariantId":null,"Name":"Name_2760","Duration":100,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639497","VersionId":null,"VariantId":null,"Name":"Name_2740","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639504","VersionId":null,"VariantId":null,"Name":"Name_2880","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639503","VersionId":null,"VariantId":null,"Name":"Name_2750","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639502","VersionId":null,"VariantId":null,"Name":"Name_2830","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639501","VersionId":null,"VariantId":null,"Name":"Name_2860","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639508","VersionId":null,"VariantId":null,"Name":"Name_2690","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639507","VersionId":null,"VariantId":null,"Name":"Name_2820","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639506","VersionId":null,"VariantId":null,"Name":"Name_2710","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639505","VersionId":null,"VariantId":null,"Name":"Name_2770","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639512","VersionId":null,"VariantId":null,"Name":"Name_2780","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639511","VersionId":null,"VariantId":null,"Name":"Name_2720","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639510","VersionId":null,"VariantId":null,"Name":"Name_2840","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639509","VersionId":null,"VariantId":null,"Name":"Name_2790","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639515","VersionId":null,"VariantId":null,"Name":"Name_2850","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639514","VersionId":null,"VariantId":null,"Name":"Name_2730","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:639513","VersionId":null,"VariantId":null,"Name":"Name_2800","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:632066","VersionId":"1","VariantId":"A","Name":"Station 02","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:640996","VersionId":null,"VariantId":null,"Name":"Name_2390","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:640995","VersionId":null,"VariantId":null,"Name":"Name_2490","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:640994","VersionId":null,"VariantId":null,"Name":"Name_2400","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:640993","VersionId":null,"VariantId":null,"Name":"Name_2430","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:641000","VersionId":null,"VariantId":null,"Name":"Name_2460","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:640999","VersionId":null,"VariantId":null,"Name":"Name_2410","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:640998","VersionId":null,"VariantId":null,"Name":"Name_2500","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:640997","VersionId":null,"VariantId":null,"Name":"Name_2360","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:641004","VersionId":null,"VariantId":null,"Name":"Name_2420","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:641003","VersionId":null,"VariantId":null,"Name":"Name_2370","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:641002","VersionId":null,"VariantId":null,"Name":"Name_2450","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:641001","VersionId":null,"VariantId":null,"Name":"Name_2570","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:641005","VersionId":null,"VariantId":null,"Name":"Name_2470","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:640992","VersionId":null,"VariantId":null,"Name":"Name_2380","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:640991","VersionId":null,"VariantId":null,"Name":"Name_2480","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:640990","VersionId":null,"VariantId":null,"Name":"Name_2440","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:631969","VersionId":"1","VariantId":"A","Name":"Station 11","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:642476","VersionId":null,"VariantId":null,"Name":"Name_2200","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:642475","VersionId":null,"VariantId":null,"Name":"Name_2130","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:642474","VersionId":null,"VariantId":null,"Name":"Name_2120","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:642480","VersionId":null,"VariantId":null,"Name":"Name_2140","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:642479","VersionId":null,"VariantId":null,"Name":"Name_2160","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:642478","VersionId":null,"VariantId":null,"Name":"Name_2220","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:642477","VersionId":null,"VariantId":null,"Name":"Name_2180","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:642484","VersionId":null,"VariantId":null,"Name":"Name_2150","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:642483","VersionId":null,"VariantId":null,"Name":"Name_2170","Duration":0,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:642482","VersionId":null,"VariantId":null,"Name":"Name_2210","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:642481","VersionId":null,"VariantId":null,"Name":"Name_2190","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:631707","VersionId":"1","VariantId":"A","Name":"Station 20","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:635080","VersionId":null,"VariantId":null,"Name":"Name_1800","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:635079","VersionId":null,"VariantId":null,"Name":"Name_1750","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:635078","VersionId":null,"VariantId":null,"Name":"Name_1700","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:635084","VersionId":null,"VariantId":null,"Name":"Name_1810","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:635083","VersionId":null,"VariantId":null,"Name":"Name_1760","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:635082","VersionId":null,"VariantId":null,"Name":"Name_1710","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:635081","VersionId":null,"VariantId":null,"Name":"Name_1820","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:635088","VersionId":null,"VariantId":null,"Name":"Name_1740","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:635087","VersionId":null,"VariantId":null,"Name":"Name_1770","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:635086","VersionId":null,"VariantId":null,"Name":"Name_1720","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:635085","VersionId":null,"VariantId":null,"Name":"Name_1780","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:635090","VersionId":null,"VariantId":null,"Name":"Name_1730","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:635089","VersionId":null,"VariantId":null,"Name":"Name_1790","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:631066","VersionId":"1","VariantId":"A","Name":"Station 06","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:632356","VersionId":null,"VariantId":null,"Name":"Name_0130","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:632355","VersionId":null,"VariantId":null,"Name":"Name_0080","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:632354","VersionId":null,"VariantId":null,"Name":"Name_0030","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:632360","VersionId":null,"VariantId":null,"Name":"Name_0140","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:632359","VersionId":null,"VariantId":null,"Name":"Name_0090","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:632358","VersionId":null,"VariantId":null,"Name":"Name_0010","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:632357","VersionId":null,"VariantId":null,"Name":"Name_0040","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:632364","VersionId":null,"VariantId":null,"Name":"Name_0070","Duration":45,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:632363","VersionId":null,"VariantId":null,"Name":"Name_0100","Duration":100,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:632362","VersionId":null,"VariantId":null,"Name":"Name_0050","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:632361","VersionId":null,"VariantId":null,"Name":"Name_0110","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:632367","VersionId":null,"VariantId":null,"Name":"Name_0060","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:632366","VersionId":null,"VariantId":null,"Name":"Name_0020","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:632365","VersionId":null,"VariantId":null,"Name":"Name_0120","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:631120","VersionId":"1","VariantId":"A","Name":"Station 09","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633672","VersionId":null,"VariantId":null,"Name":"Name_0180","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633671","VersionId":null,"VariantId":null,"Name":"Name_0290","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633670","VersionId":null,"VariantId":null,"Name":"Name_0240","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633669","VersionId":null,"VariantId":null,"Name":"Name_0190","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633676","VersionId":null,"VariantId":null,"Name":"Name_0250","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633675","VersionId":null,"VariantId":null,"Name":"Name_0200","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633674","VersionId":null,"VariantId":null,"Name":"Name_0310","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633673","VersionId":null,"VariantId":null,"Name":"Name_0150","Duration":45,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633680","VersionId":null,"VariantId":null,"Name":"Name_0210","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633679","VersionId":null,"VariantId":null,"Name":"Name_0160","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633678","VersionId":null,"VariantId":null,"Name":"Name_0270","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633677","VersionId":null,"VariantId":null,"Name":"Name_0300","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633684","VersionId":null,"VariantId":null,"Name":"Name_0170","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633683","VersionId":null,"VariantId":null,"Name":"Name_0280","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633682","VersionId":null,"VariantId":null,"Name":"Name_0230","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633681","VersionId":null,"VariantId":null,"Name":"Name_0260","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:633685","VersionId":null,"VariantId":null,"Name":"Name_0220","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:631599","VersionId":"1","VariantId":"A","Name":"Station 04","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:649252","VersionId":null,"VariantId":null,"Name":"Name_1470","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:649251","VersionId":null,"VariantId":null,"Name":"Name_1530","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:649250","VersionId":null,"VariantId":null,"Name":"Name_1550","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:649249","VersionId":null,"VariantId":null,"Name":"Name_1480","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:649240","VersionId":null,"VariantId":null,"Name":"Name_1490","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:649239","VersionId":null,"VariantId":null,"Name":"Name_1430","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:649244","VersionId":null,"VariantId":null,"Name":"Name_1460","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:649243","VersionId":null,"VariantId":null,"Name":"Name_1500","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:649242","VersionId":null,"VariantId":null,"Name":"Name_1440","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:649241","VersionId":null,"VariantId":null,"Name":"Name_1540","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:649248","VersionId":null,"VariantId":null,"Name":"Name_1420","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:649247","VersionId":null,"VariantId":null,"Name":"Name_1510","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:649246","VersionId":null,"VariantId":null,"Name":"Name_1450","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:649245","VersionId":null,"VariantId":null,"Name":"Name_1520","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:632014","VersionId":"1","VariantId":"A","Name":"Station 17","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:650248","VersionId":null,"VariantId":null,"Name":"Name_2280","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:650252","VersionId":null,"VariantId":null,"Name":"Name_2290","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:650251","VersionId":null,"VariantId":null,"Name":"Name_2240","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:650250","VersionId":null,"VariantId":null,"Name":"Name_2270","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:650249","VersionId":null,"VariantId":null,"Name":"Name_2330","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:650256","VersionId":null,"VariantId":null,"Name":"Name_2250","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:650255","VersionId":null,"VariantId":null,"Name":"Name_2340","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:650254","VersionId":null,"VariantId":null,"Name":"Name_2230","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:650253","VersionId":null,"VariantId":null,"Name":"Name_2350","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:650260","VersionId":null,"VariantId":null,"Name":"Name_2310","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:650259","VersionId":null,"VariantId":null,"Name":"Name_2260","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:650258","VersionId":null,"VariantId":null,"Name":"Name_2320","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:650257","VersionId":null,"VariantId":null,"Name":"Name_2300","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:631758","VersionId":"1","VariantId":"A","Name":"Station 14","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:651556","VersionId":null,"VariantId":null,"Name":"Name_1910","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:651555","VersionId":null,"VariantId":null,"Name":"Name_1860","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:651560","VersionId":null,"VariantId":null,"Name":"Name_1920","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:651559","VersionId":null,"VariantId":null,"Name":"Name_1870","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:651558","VersionId":null,"VariantId":null,"Name":"Name_1850","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:651557","VersionId":null,"VariantId":null,"Name":"Name_1960","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:651564","VersionId":null,"VariantId":null,"Name":"Name_1930","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:651563","VersionId":null,"VariantId":null,"Name":"Name_1880","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:651562","VersionId":null,"VariantId":null,"Name":"Name_1830","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:651561","VersionId":null,"VariantId":null,"Name":"Name_1940","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:651568","VersionId":null,"VariantId":null,"Name":"Name_1890","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:651567","VersionId":null,"VariantId":null,"Name":"Name_1840","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:651566","VersionId":null,"VariantId":null,"Name":"Name_1950","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:651565","VersionId":null,"VariantId":null,"Name":"Name_1900","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]},{"UniqueId":"OR:com.ptc.windchill.mpml.resource.MPMWorkCenter:631242","VersionId":"1","VariantId":"A","Name":"Station 01","Operations":[{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647876","VersionId":null,"VariantId":null,"Name":"Name_0540","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647875","VersionId":null,"VariantId":null,"Name":"Name_0570","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647874","VersionId":null,"VariantId":null,"Name":"Name_0520","Duration":90,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647873","VersionId":null,"VariantId":null,"Name":"Name_0470","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647880","VersionId":null,"VariantId":null,"Name":"Name_0500","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647879","VersionId":null,"VariantId":null,"Name":"Name_0530","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647878","VersionId":null,"VariantId":null,"Name":"Name_0480","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647877","VersionId":null,"VariantId":null,"Name":"Name_0590","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647883","VersionId":null,"VariantId":null,"Name":"Name_0490","Duration":60,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647882","VersionId":null,"VariantId":null,"Name":"Name_0600","Duration":10,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647881","VersionId":null,"VariantId":null,"Name":"Name_0550","Duration":40,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647868","VersionId":null,"VariantId":null,"Name":"Name_0620","Duration":30,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647872","VersionId":null,"VariantId":null,"Name":"Name_0580","Duration":70,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647871","VersionId":null,"VariantId":null,"Name":"Name_0610","Duration":20,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647870","VersionId":null,"VariantId":null,"Name":"Name_0560","Duration":50,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]},{"UniqueId":"OR:com.ptc.windchill.mpml.processplan.operation.MPMOperation:647869","VersionId":null,"VariantId":null,"Name":"Name_0510","Duration":80,"VA":0,"SVA":0,"NVA":0,"WalkDistance":0,"Type":"Assemble","Activities":[],"TargetWorkers":[],"TargetTools":[],"TargetParts":[]}]}]}]}],"LaunchParameters":{"plantOid":"com.ptc.windchill.mpml.resource.MPMPlant:630719","wcServerURL":"http://augm01.aug.com/Windchill/","processPlanId":"com.ptc.windchill.mpml.processplan.MPMProcessPlan:656085","containerId":"OR:wt.pdmlink.PDMLinkProduct:611012","processPlanNavigationCriteriaId":null}}';

    initGraph(sampleJsonSmall, sampleJsonSmall2, sampleJsonSmall3);
  });
});

function reloadGraph() {
  initGraph(sampleJsonSmall)
}







