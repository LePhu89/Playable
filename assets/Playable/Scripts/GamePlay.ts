import { _decorator, Color, color, Component, EventMouse, input, Input, Node, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GamePlay')
export class GamePlay extends Component {
    @property({
        type: Sprite,
    })
    public square1: Sprite;
    @property({
        type: Sprite,
    })
    public square2: Sprite;
    @property({
        type: Sprite,
    })
    public square3: Sprite;
    @property({
        type: Sprite,
    })
    public square4: Sprite;
    @property({
        type: Sprite,
    })
    public square5: Sprite;
    @property({
        type: Sprite,
    })
    public square6: Sprite;
    @property({
        type: Sprite,
    })
    public square7: Sprite;
    @property({
        type: Sprite,
    })
    public square8: Sprite;
    @property({
        type: Sprite,
    })
    public square9: Sprite;
    @property({
        type: SpriteFrame,
    })
    public numburSpriteFarme: SpriteFrame;
    @property({
        type: Node,
    })
    public arrow2: Node;
    @property({
        type: Node,
    })
    public arrow1: Node;
    @property({
        type: Node,
    })
    public arrow4: Node;
    @property({
        type: Node,
    })
    public yellow5: Node;
    @property({
        type: Node,
    })
    public yellow4: Node;
    @property({
        type: Node,
    })
    public yellow2: Node;
    @property({
        type: Node,
    })
    public yellow3: Node;
    @property({
        type: Node,
    })
    public blue1: Node;
    @property({
        type: Node,
    })
    public blue2: Node;
    @property({
        type: Node,
    })
    public blue3: Node;
    @property({
        type: Node,
    })
    public blue4: Node;
    @property({
        type: Node,
    })
    public blue5: Node;
    @property({
        type: Node,
    })
    public blue6: Node;
    @property({
        type: Node,
    })
    public blue7: Node;
    @property({
        type: Node,
    })
    public blue8: Node;
    @property({
        type: Node,
    })
    public blue9: Node;
    @property({
        type: Sprite,
    })
    public number6: Sprite;
    @property({
        type: Sprite,
    })
    public number7: Sprite;
    @property({
        type: Node,
    })
    public noColor: Node;
    a1: Boolean;
    a2: Boolean;
    a3: Boolean;
    a4: Boolean;
    a5: Boolean;
    b1: Boolean;
    b2: Boolean;
    b3: Boolean;
    b4: Boolean;
    lv1: Boolean = true;
    lv2: Boolean = false;
    onLoad(){
        input.on(Input.EventType.MOUSE_DOWN, this.gamelv1, this);
        input.on(Input.EventType.MOUSE_DOWN, this.gamelv2, this);
    }

    gamelv1(){
        if(this.lv1 == true){
            this.square1.node.on(Node.EventType.MOUSE_ENTER, (event) =>{
                this.blue1.active = true;
                this.a1 = true;
            })
            this.square2.node.on(Node.EventType.MOUSE_ENTER, (event) =>{
                this.blue2.active = true;
                this.a2 = true;
              })
                this.square3.node.on(Node.EventType.MOUSE_ENTER, (event) =>{
                this.blue3.active = true;
                this.a3 = true;
              })
              this.square4.node.on(Node.EventType.MOUSE_ENTER, (event) =>{
                this.blue4.active = true;
                this.a4 = true;
              })
              this.square5.node.on(Node.EventType.MOUSE_ENTER, (event) =>{
                this.blue5.active = true;
                this.a5 = true;
                if(this.a1 == true && this.a2 == true && this.a3 == true, this.a4 == true, this.a5 == true){
                    this.showLV2();
                    this.lv2 = true;     
                    this.number6.spriteFrame = this.numburSpriteFarme;
                }
              })       
        }
        
    }

    gamelv2(){
        this.arrow2.active = false;        
        if(this.lv2 == true){
            this.square6.node.on(Node.EventType.MOUSE_ENTER, (event) =>{
                this.blue6.active = true;
                this.b1 = true;
                this.square5.node.active = false;
              })
              this.square7.node.on(Node.EventType.MOUSE_ENTER, (event) =>{
                this.blue7.active = true;
                this.b2 = true;
              })
              this.square8.node.on(Node.EventType.MOUSE_ENTER, (event) =>{
                this.blue8.active = true;
                this.b3 = true;
              })
              this.square9.node.on(Node.EventType.MOUSE_ENTER, (event) =>{
                this.blue9.active = true;
                this.b4 = true;
                if(this.b1 == true && this.b2 == true && this.b3 == true && this.b4 == true){
                    this.showLV3();
                    this.number7.spriteFrame = this.numburSpriteFarme;
                }
              })       
        }
        
    }
    showLV2(){                                 
        this.arrow2.active = true;
        this.yellow4.active = true; 
        this.yellow5.active = false;  
        this.square6.node.active = true;               
        this.square7.node.active = true;               
        this.square8.node.active = true;               
        this.square9.node.active = true;               
    }   
    showLV3(){
        this.noColor.active = true;
        this.yellow4.active = false;
        this.arrow1.active = true;
        this.arrow4.active = true;
        this.yellow2.active = true;
        this.yellow3.active = true;
    }

    update(){
                
    }
   
}


