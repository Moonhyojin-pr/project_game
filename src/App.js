
import React, {useEffect, useRef } from 'react';
import Matter from "matter-js"
import { FRUITS } from './fruits';
import "./App.css"

//suikagame logo, level logo(x)
    //import watermelon from "./10_watermelon.png"
    //import wmlevel from "./wmlevel.png"

// Game변수지정
export default function MatterGame (){

//useRef :초기값
const containerRef = useRef()
const canvasRef = useRef(null)

useEffect(() => {

    let currentBody = null,
        currentFruit =null,
        disableAction = false,
        interval = null

    let Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Body = Matter.Body,
        Bodies = Matter.Bodies,
        Events = Matter.Events
            

    // create an engine
    let engine = Engine.create();

    // create a renderer
    let render = Render.create({
        element: containerRef.current,
        engine: engine,
        canvas: canvasRef.current,
        options: {
            wireframes:false,
            width:620,
            height: 850,
            background: "#ffe5c7"
        }
    })
    //left, right wall, ground, topline
    const leftWall = Bodies.rectangle(15, 395, 30, 790, {
        isStatic: true,
        render: {fillStyle: "#E6B143"}
    })

    const rightWall = Bodies.rectangle(605, 395, 30, 790, {
        isStatic: true,
        render: {fillStyle: "#E6B143"}
    })

    const ground = Bodies.rectangle(310, 820, 620, 60, {
        isStatic: true,
        render: { fillStyle: "#E6B143"}
    })

    const topLine = Bodies.rectangle(310, 150, 620, 2, {
        name: "topLine",
        isStatic: true,
        isSensor: true,
        render: { fillStyle: "#E6B143"}
    })


    //addfruit : random fruits, 과일 사진 불러옴, 탄성
    function addFruit (){
        const index = Math.floor(Math.random()*6)
        const fruit = FRUITS[index]

        const body = Bodies.circle(300, 50, fruit.radius, {
            index: index,
            isSleeping: true,
            render: {
                sprite: {texture: `${fruit.name}.png`}
            },
            //탄성
            restitution: 0.2,
        })

        currentBody = body
        currentFruit = fruit

        World.add(engine.world, body)
    }





    

})




}