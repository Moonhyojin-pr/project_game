//matter-js에서 제공하는 기본 동작 방법 참고 > React에서 사용하도록 변
// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

//create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true});

//add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

//run the renderer
Render.run(render);

//create runner
var runner = Runner.create();

//run the engine
Runner.run(runner, engine);

// 상자 구현
useEffect(()=>{
    let Engine = Matter.Engine
    let Render = Matter.Render
    let World = Matter.World
    let Bodies = Matter.Bodies

    let engine = Engine.create()

    let render = Render.create({
        element: containerRef.current,
        engine: engine,
        canvas: canvasRef,current,
        options: {
            wireframes: false,
            width : 620,
            height : 850,
            background: "#F7F4C8"
        }
    })
//왼쪽벽, 오른쪽벽, 바닥, 천장선 설정
    //isStatic = true : 물건이 위에서 아래로 떨어지는 물리엔진
    const leftWall = Bodies.rectangle(15, 395, 30, 790, {        
        isStatic: true,
        render: { fillStyle: "#E6B143" }
    })
    const rightWall = Bodies.rectangle(605, 395, 30, 790, {
        isStatic: true,
        render: { fillStyle: "#E6B143" }
    })const ground = Bodies.rectangle(310, 820, 620, 60, {
        isStatic: true,
        render: { fillStyle: "#E6B143" }
    })const topLine = Bodies.rectangle(310, 150, 620, 2, {
        isStatic: true,
        render: { fillStyle: "#E6B143" }
    })

//world 화면 구현
    World.add(engine.world, [leftWall, rightWall, ground, topLine])
    Matter.Runner.run(engine)
    Render.run(render)
},[])

return(
    <div ref={containerRef} align="center">
        <canvas ref={canvasRef}></canvas>
    </div>
)
}
