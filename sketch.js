const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var ball

function preload(){
    
}

function setup(){
    ball=new Drops(200,450,40);
    
}

function draw(){
    ball.display()
}   

