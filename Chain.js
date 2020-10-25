class Chain
{
    constructor(bodyA,bodyB)
    {
        //console.log("Hi")
        var constraint_Options =
        {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.02,
            length:20
        }
        this.chain = Constraint.create(constraint_Options);
        console.log(this.chain)
        World.add(world,this.chain);
    }

    display()
    {
        stroke("Purple")
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,
            this.chain.bodyB.position.y)
    }
}
