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

})