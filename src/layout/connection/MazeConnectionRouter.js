import draw2d from '../../packages'


/**
 * @class
 * <b>BETA VERSION. Not for production!!!<br></b>
 *
 * @inheritable
 * @author Andreas Herz
 *
 * @extends  draw2d.layout.connection.ConnectionRouter
 */

let ROUTER_RECTS = null

draw2d.layout.connection.MazeConnectionRouter = draw2d.layout.connection.ConnectionRouter.extend(
  /** @lends draw2d.layout.connection.MazeConnectionRouter.prototype */
  {

  NAME: "draw2d.layout.connection.MazeConnectionRouter",


  /**
   * Creates a new Router object.
   *
   */
  init: function () {
    this._super()

    this.useSpline = false
    this.useSimplify = true
    this.useSimplifyValue = 2
    this.useDebug = false
    this.useShift = 4
    this.portOutletOffset = 15


//    	this.finder = new PF.AStarFinder();
//      this.finder = new PF.AStarFinder({ allowDiagonal: true, dontCrossCorners: true});
//      this.finder = new PF.AStarFinder({ allowDiagonal: false});
//      this.finder = new PF.BiBreadthFirstFinder({ allowDiagonal: false});
//      this.finder = new PF.BreadthFirstFinder({ allowDiagonal: false});
    this.finder = new PF.JumpPointFinder({allowDiagonal: false, dontCrossCorners: true})
  },


  /**
   * 
   * Callback method if the router has been assigned to a connection.
   *
   * @param {draw2d.Connection} connection The assigned connection
   * @template
   * @since 2.7.2
   */
  onInstall: function (connection) {
    connection.installEditPolicy(new draw2d.policy.line.LineSelectionFeedbackPolicy())
  },

  /**
   * @inheritdoc
   */
  route: function (conn, routingHints) {
    let fromPt = conn.getStartPoint()
    let fromDir = conn.getSource().getConnectionDirection(conn.getTarget())

    let toPt = conn.getEndPoint()
    let toDir = conn.getTarget().getConnectionDirection(conn.getSource())

    // calculate the lines between the two points.
    //
    this._route(conn, toPt, toDir, fromPt, fromDir)
    this._paint(conn)
  },

  /**
   * 
   * Internal routing algorithm.
   *     * <p>
   * Possible values:
   * <ul>
   *   <li>up -&gt; 0</li>
   *   <li>right -&gt; 1</li>
   *   <li>down -&gt; 2</li>
   *   <li>left -&gt; 3</li>
   * </ul>
   * <p>

   * @private
   * @param {draw2d.Connection} conn
   * @param {draw2d.geo.Point} fromPt
   * @param {Number} fromDir
   * @param {draw2d.geo.Point} toPt
   * @param {Number} toDir
   */
  _route: function (conn, fromPt, fromDir, toPt, toDir) {
    let shift = this.useShift

    let oldToPt = toPt
    let oldFromPt = fromPt

    // move the points with an offset in the prefered routing direction of the ports
    // to avoid that the routed connection is sticking on one side of the figure.
    //
    fromPt = this.getAdjustedPoint(fromPt, fromDir, this.portOutletOffset)
    toPt = this.getAdjustedPoint(toPt, toDir, this.portOutletOffset)

    let grid = this.generateNoGoGrid(conn, fromPt, fromDir, toPt, toDir)

    // 4. Calculate the shortest path from source to target based on the grid
    //
    let path = this.finder.findPath(
        Math.max(fromPt.x) >> shift, Math.max(fromPt.y) >> shift,
        Math.max(toPt.x )>> shift, Math.max(0,toPt.y) >> shift,
        grid)

    // transfer the path from the grid based coordinates back to the real coordinates
    //
    path.forEach(e => {
      e.x = e[0] = e[0] << shift
      e.y = e[1] = e[1] << shift
    })

    // 5. paint the "no go" area in read if we are in debug mode
    //
    if (this.useDebug) {
      if (ROUTER_RECTS !== null) {
        ROUTER_RECTS.remove()
      }
      ROUTER_RECTS = conn.canvas.paper.set()

      for (let i = 0; i < grid.width; i++) {
        for (let j = 0; j < grid.height; j++) {
          if (!grid.isWalkableAt(i, j))
            ROUTER_RECTS.push(conn.canvas.paper.rect(i << shift, j << shift, 1 << shift, 1 << shift).attr({
              "fill": "red",
              "opacity": "0.1"
            }))
        }
      }
      ROUTER_RECTS.push(conn.canvas.paper.rect(fromPt.x - 3, fromPt.y - 3, 6, 6).attr({
        "fill": "#ff0000",
        "opacity": "0.8"
      }))
      ROUTER_RECTS.push(conn.canvas.paper.rect(toPt.x - 3, toPt.y - 3, 6, 6).attr({
        "fill": "#ff0000",
        "opacity": "0.8"
      }))

      // paint the original calculated path without any simplification in BLUE
      path.forEach(e => {
        ROUTER_RECTS.push(conn.canvas.paper.rect(e.x - 3, e.y - 3, 6, 6).attr({"fill": "#0000ff", "opacity": "0.8"}))
      })
      if(path.length>0){
        let p = path[0]
        let svgPathBefore = ["M", p.x.toFixed(2), " ", p.y.toFixed(2)]
        for (let i = 1; i < path.length; i++) {
          p = path[i]
          svgPathBefore.push("L", p.x.toFixed(2), " ", p.y.toFixed(2))
        }
        svgPathBefore = svgPathBefore.join("")
        ROUTER_RECTS.push(conn.canvas.paper.path(svgPathBefore).attr({"stroke": "#0000ff"}))
      }
    }


    this.adjustPath(fromPt, path, fromDir)
    path.reverse()
    this.adjustPath(toPt, path, toDir)
    path.reverse()

    path.forEach(e => {
      e.x = e[0]
      e.y = e[1]
    })


    if (this.useSpline) {
      let p = new draw2d.util.ArrayList()
      p.add(oldFromPt)
      path.forEach(e => {
        p.add(new draw2d.geo.Point(e[0], e[1]))
      })
      p.add(oldToPt)

      if (this.useDebug) {
        path.forEach(e => {
          ROUTER_RECTS.push(conn.canvas.paper.rect(e.x - 3, e.y - 3, 6, 6).attr({"fill": "#00ff00", "opacity": "0.8"}))
        })
        let pt = path[0]
        let svgPathBefore = ["M", pt.x.toFixed(2), " ", pt.y.toFixed(2)]
        for (let i = 1; i < path.length; i++) {
          pt = path[i]
          svgPathBefore.push("L", pt.x.toFixed(2), " ", pt.y.toFixed(2))
        }
        svgPathBefore = svgPathBefore.join("")
        ROUTER_RECTS.push(conn.canvas.paper.path(svgPathBefore).attr({"stroke": "#00ff00"}))
      }

      this.spline = new draw2d.util.spline.CubicSpline()
      let splinePoints = this.spline.generate(p, 8)

      if (this.useSimplify) {
        path = []
        splinePoints.each(function (i, e) {
          path.push({x: e.x, y: e.y})
        })
        path = this.simplify(path, this.useSimplifyValue, true)

        path.forEach(e => {
          conn.addPoint(e.x, e.y)
        })
      }
      else {
        splinePoints.each(function (i, e) {
          conn.addPoint(e)
        })
      }
    }
    else {
      if (this.useSimplify) {
        path = this.simplify(path, this.useSimplifyValue, true)
      }

      if (this.useDebug) {
        path.forEach(e => {
          ROUTER_RECTS.push(conn.canvas.paper.rect(e.x - 3, e.y - 3, 6, 6).attr({"fill": "#00ff00", "opacity": "0.8"}))
        })
        if(path.length>0){
          let p = path[0]
          let svgPathBefore = ["M", p.x.toFixed(2), " ", p.y.toFixed(2)]
          for (let i = 1; i < path.length; i++) {
            p = path[i]
            svgPathBefore.push("L", p.x.toFixed(2), " ", p.y.toFixed(2))
          }
          svgPathBefore = svgPathBefore.join("")
          ROUTER_RECTS.push(conn.canvas.paper.path(svgPathBefore).attr({"stroke": "#00ff00"}))
        }
      }

      conn.addPoint(oldFromPt)
      path.forEach(e => {
        conn.addPoint(e[0], e[1])
      })
      conn.addPoint(oldToPt)

    }

  },

  /**
   * 
   * Generate a grid base no go map required for the path finding algorithm
   *
   * @param conn
   * @returns {PF.Grid}
   * @private
   */
  generateNoGoGrid: function (conn, fromPt, fromDir, toPt, toDir) {
    let shift = this.useShift
    let oneShift2 = (1 << shift) / 2

    // 1. generate a map with all "no go" areas. The bounding box of the shapes defines
    //    the no go areas.
    //
    let canvasWidth = conn.getCanvas().paper.width >> shift
    let canvasHeight = conn.getCanvas().paper.height >> shift
    let grid = new PF.Grid(canvasWidth, canvasHeight)
    let figures = conn.getCanvas().getFigures()
    figures.each(function (i, e) {
      let box = e.getBoundingBox()
      // remove shapes which are hit by the input or output ports. It is not possible to route
      // out from a not walkable area
      if (box.hitTest(fromPt.x, fromPt.y) === true || box.hitTest(toPt.x, toPt.y)) {
        return
      }

      let x = box.x >> shift
      let y = box.y >> shift
      if (x < 1 || y < 1) {
        return
      }
      let r_orig = (box.x + box.w + oneShift2) >> shift
      let b_orig = (box.y + box.h + oneShift2) >> shift
      for (let i = x; i <= r_orig; i++) {
        for (let j = y; j <= b_orig; j++) {
          grid.setWalkableAt(i, j, false)
        }
      }
    })


    // 3. make the are walkable on the edge of the port side. Otherwise we a
    //    an enclosed area around the port if we are very close to another shape
    //
    let box = conn.getSource().getParent().getBoundingBox()
    if (toDir === 1 || toDir === 3) {
      let y = box.y >> shift
      if (y > 0) {
        let b_orig = box.y + box.h
        let i = (toPt.x >> shift)

        for (let j = y - 1; j << shift <= b_orig; j++) {
          grid.setWalkableAt(i, j, true)
        }
      }
    }
    else {
      let x = box.x >> shift
      if (x > 0) {
        let r_orig = box.x + box.w
        let j = (toPt.x >> shift)
        for (let i = x - 1; i << shift <= r_orig; i++) {
          grid.setWalkableAt(i, j, true)
        }
      }
    }

    box = conn.getTarget().getParent().getBoundingBox()
    if (fromDir === 1 || fromDir === 3) {
      let y = box.y >> shift
      if (y > 0) {
        let b_orig = box.y + box.h
        let i = (fromPt.x >> shift)
        for (let j = y - 1; j << shift <= b_orig; j++) {
          grid.setWalkableAt(i, j, true)
        }
      }
    }
    else {
      let x = box.x >> shift
      if (x > 0) {
        let r_orig = box.x + box.w
        let j = (fromPt.x >> shift)
        for (let i = x - 1; i << shift <= r_orig; i++) {
          grid.setWalkableAt(i, j, true)
        }
      }
    }

    return grid
  },

  /**
   * 
   * move the point in the given direction with the given offset
   *
   * @param {draw2d.geo.Point} pt
   * @param {Number} direction
   * @param {Number} adjustment
   *
   * @returns {draw2d.geo.Point}
   */
  getAdjustedPoint: function (pt, direction, adjustment) {

    switch (direction) {
      case draw2d.geo.Rectangle.DIRECTION_UP:
        return new draw2d.geo.Point(pt.x, pt.y - adjustment)
      case draw2d.geo.Rectangle.DIRECTION_RIGHT:
        return new draw2d.geo.Point(pt.x + adjustment, pt.y)
      case draw2d.geo.Rectangle.DIRECTION_DOWN:
        return new draw2d.geo.Point(pt.x, pt.y + adjustment)
      case draw2d.geo.Rectangle.DIRECTION_LEFT:
        return new draw2d.geo.Point(pt.x - adjustment, pt.y)
    }
  },

  adjustPath: function (pt, path, direction) {
    let shift = this.useShift
    let x = pt.x >> shift
    let y = pt.y >> shift
    path.forEach(e => {
      if (y === (e[1] >> shift)) {
        e[1] = pt.y
      }
      else {
        return false
      }
    })
    path.forEach(e => {
      if (x === (e[0] >> shift)) {
        e[0] = pt.x
      }
      else {
        return false
      }
    })
  },


  getSquareDistance: function (p1, p2) { // square distance between 2 points

    let dx = p1.x - p2.x,
      dy = p1.y - p2.y

    return dx * dx +
      dy * dy
  },

  getSquareSegmentDistance: function (p, p1, p2) { // square distance from a point to a segment

    let x = p1.x,
      y = p1.y,

      dx = p2.x - x,
      dy = p2.y - y,

      t

    if (dx !== 0 || dy !== 0) {

      t = ((p.x - x) * dx +
        (p.y - y) * dy) /
        (dx * dx +
          dy * dy)

      if (t > 1) {
        x = p2.x
        y = p2.y

      } else if (t > 0) {
        x += dx * t
        y += dy * t
      }
    }

    dx = p.x - x
    dy = p.y - y

    return dx * dx +
      dy * dy
  },

  simplifyRadialDistance: function (points, sqTolerance) { // distance-based simplification

    let i,
      len = points.length,
      point = null,
      prevPoint = points[0],
      newPoints = [prevPoint]

    for (i = 1; i < len; i++) {
      point = points[i]

      if (this.getSquareDistance(point, prevPoint) > sqTolerance) {
        newPoints.push(point)
        prevPoint = point
      }
    }

    if (prevPoint !== point) {
      newPoints.push(point)
    }

    return newPoints
  },


  // simplification using optimized Douglas-Peucker algorithm with recursion elimination

  simplifyDouglasPeucker: function (points, sqTolerance) {

    let len = points.length,

      MarkerArray = (typeof Uint8Array !== undefined + '')
        ? Uint8Array
        : Array,

      markers = new MarkerArray(len),

      first = 0,
      last = len - 1,

      i,
      maxSqDist,
      sqDist,
      index,

      firstStack = [],
      lastStack = [],

      newPoints = []

    markers[first] = markers[last] = 1

    while (last) {

      maxSqDist = 0

      for (i = first + 1; i < last; i++) {
        sqDist = this.getSquareSegmentDistance(points[i], points[first], points[last])

        if (sqDist > maxSqDist) {
          index = i
          maxSqDist = sqDist
        }
      }

      if (maxSqDist > sqTolerance) {
        markers[index] = 1

        firstStack.push(first)
        lastStack.push(index)

        firstStack.push(index)
        lastStack.push(last)
      }

      first = firstStack.pop()
      last = lastStack.pop()
    }

    for (i = 0; i < len; i++) {
      if (markers[i]) {
        newPoints.push(points[i])
      }
    }

    return newPoints
  },


  simplify: function (points, tolerance, highestQuality) {

    let sqTolerance = (tolerance !== undefined)
      ? tolerance * tolerance
      : 1

    if (!highestQuality) {
      points = this.simplifyRadialDistance(points, sqTolerance)
    }
    points = this.simplifyDouglasPeucker(points, sqTolerance)

    return points
  }
})
