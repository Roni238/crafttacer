// import { update } from "../render";

let store={
    _state:{
        level1:{
                playerData:{
                    cordX:11,
                    cordY:4,
                },
                futureCordPlayer:{
                    futureCordX:11,
                    futureCordY:4
                },
                steps:34,
                objData:{
                    blocks:{
                        block:[
                            [10,3],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[11,1],[12,1],[13,1],[14,1],[15,1],[16,1],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[11,2],[12,2],[13,2],[14,2],[15,2],[16,2],[1,3],[2,3],[3,3],[4,3],[5,3],[12,3],[13,3],[14,3],[15,3],[16,3],[1,4],[2,4],[3,4],[4,4],[5,4],[12,4],[13,4],[14,4],[15,4],[16,4],[1,5],[2,5],[3,5],[4,5],[5,5],[12,5],[13,5],[14,5],[15,5],[16,5],[1,6],[2,6],[3,6],[5,6],[12,6],[13,6],[14,6],[15,6],[16,6],[1,7],[2,7],[3,7],[11,7],[12,7],[13,7],[14,7],[15,7],[16,7],[1,8],[2,8],[3,8],[11,8],[12,8],[13,8],[14,8],[15,8],[16,8],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9],[10,9],[11,9],[12,9],[13,9],[14,9],[15,9],[16,9]       
                        ],
                        blockSide:[
                            [7,1],[8,1],[9,1],[10,1],[6,3],[11,3],[4,6],[5,7],[7,5]
                        ],
                        blockStone:[
                            [7,3],[9,3],[8,3],[11,6],[7,5],[9,5],[7,7],[9,7]
                        ],
                        lava:[
                            [8,4],[7,4],[6,5],[8,5],[9,6],[10,6],[8,7],[6,7]
                        ]
                    },
                    item:{
                        key:[
                            [4,7],
                        ],
                        door:[
                            [10,3],
                        ],
                        target:[
                            [7,2],
                            [8,2]
                        ],
                        enemy:[
                            [8,6],
                            [9,8]
                        ]
                    }
                },
                win:false,
                var:{
                    block:0,
                    arrCordObj:0,
                    strCordFuture:0,
                    arrCordLava:0,
                    arrCordEnemy:0,
                    blocking:0,
                    eneming:0,
                    enemyCord:0,
                    arrCordTarget:0,
                    arrCordKey:0,
                    haveKey:0,
                    stepLava:0,
                }
                
        },
        level2:{
            playerData:{
                cordX:2,
                cordY:7,
            },
            futureCordPlayer:{
                futureCordX:2,
                futureCordY:7
            },
            steps:54,
            objData:{
                blocks:{
                    block:[
                        [10,3],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[14,1],[15,1],[16,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[2,9],[3,9],[7,5],[7,6],[7,4],[8,6],[10,6],[10,7],[10,8],[8,8],[6,8],[7,8],[6,7],[8,9],[4,7],[4,6],[3,4],[3,3],[3,5]
                    ],
                    blockSide:[
                        
                    ],
                    blockStone:[
                        
                    ],
                    lava:[
                        
                    ]
                },
                item:{
                    key:[
                        [10,3]
                    ],
                    door:[
                        
                    ],
                    target:[
                        [16,3],
                        [8,5]
                    ],
                    enemy:[
                        [2,6]
                    ]
                }
            },
            win:false,
            var:{
                block:0,
                arrCordObj:0,
                strCordFuture:0,
                arrCordLava:0,
                arrCordEnemy:0,
                blocking:0,
                eneming:0,
                enemyCord:0,
                arrCordTarget:0,
                arrCordKey:0,
                haveKey:0,
                stepLava:0,
            }
        },
        level3:{}
    },
    getState(){return this._state},
    update(){console.log('State chande')},
    updateState(level){
        level.var.arrCordObj=[
            ...level.objData.blocks.block,
            ...level.objData.blocks.blockSide,
            ...level.objData.blocks.blockStone].map(el=>el.join())//получение координат объектов
            level.var.strCordFuture=Object.values(level.futureCordPlayer).join()//получение будущих координат игрока 
            level.var.arrCordLava=level.objData.blocks.lava.map(el=>el.join())//получение координат магмы
            level.var.arrCordEnemy=level.objData.item.enemy.map(el=>el.join())//получение координат врагов
            level.var.blocking=level.var.arrCordObj.includes(level.var.strCordFuture)//возможность двигаться
            level.var.eneming=level.var.arrCordEnemy.includes(level.var.strCordFuture)//наличие врага на новых координатах
            level.var.enemyCord=level.objData.item.enemy[level.var.arrCordEnemy.indexOf(level.var.strCordFuture)]//координаты врага совподающие с будущими координатами игрока
            level.var.arrCordTarget=level.objData.item.target.map(el=>el.join())//Получение координат целей
            level.var.arrCordKey=level.objData.item.key.map(el=>el.join())//Получение координат ключа
            level.win=level.var.arrCordTarget.includes(level.var.strCordFuture)//победил или нет
            level.steps-=1//Уменьшение ходов
            level.var.haveKey=level.var.arrCordKey.includes(level.var.strCordFuture)//Наличие ключа у игрока
            level.var.stepLava=level.var.arrCordLava.includes(level.var.strCordFuture)//Наступил ли на лаву

    },
    subscribe(observer){this.update=observer}

}


//Обнавления данных в state которые должны обнавляться на каждых ход
//для проверки возможности двигаться мы будем сравнивать измененный при нажатии клавиш объект futureCordPlayer и мыссив arrCordObj с координатами всех объектов с колизией 

        
store.updateState(store.getState().level1)
// store.updateState(store.getState().level2)



observerKeydown(store.getState().level1)
// observerKeydown(store.getState().level2)

// отслеживание клавишь WASD и обработка передвижения
function observerKeydown(level){
    document.addEventListener('keydown', function(event) {
        switch(event.code){
            case 'KeyD':
                //Проверка что персонаж не выйдет за карту
                if(level.playerData.cordX<16){
                    level.futureCordPlayer.futureCordX+=1
                    store.updateState(level)
    
                    //если на будущих координатах враг, он сдвинется по направлению хода
                    if(level.var.eneming){level.var.enemyCord[0]+=1}
                    //проверка на возможность двигаться 
                    //Если чтото мешает пройти, возращаем будущие координаты назад
                    !(level.var.blocking||level.var.eneming) ? level.playerData.cordX+=1 : level.futureCordPlayer.futureCordX-=1
                }
                break
            case 'KeyA':
                if(level.playerData.cordX>1){
                    level.futureCordPlayer.futureCordX-=1
                    store.updateState(level)
    
                    if(level.var.eneming){level.var.enemyCord[0]-=1}
                    !(level.var.blocking||level.var.eneming) ? level.playerData.cordX-=1 : level.futureCordPlayer.futureCordX+=1
                    }
                break
            case 'KeyW':
                if(level.playerData.cordY>1){
                    level.futureCordPlayer.futureCordY-=1
                    store.updateState(level)
    
                    if(level.var.eneming){level.var.enemyCord[1]-=1}
                    !(level.var.blocking||level.var.eneming) ? level.playerData.cordY-=1 : level.futureCordPlayer.futureCordY+=1
                }
                break
            case 'KeyS':
                if(level.playerData.cordY<9){
                    level.futureCordPlayer.futureCordY+=1
                    store.updateState(level)
    
                    if(level.var.eneming){level.var.enemyCord[1]+=1}
                    !(level.var.blocking||level.var.eneming) ? level.playerData.cordY+=1 : level.futureCordPlayer.futureCordY-=1
                }
                break
        }
        //Проверки происходящие после каждого хода
        if(level.steps<0&&!level.win){
            window.location.reload()//если ходы закончатся и игрок не победил страница перезагрузится и игра начнется заново
          }
        if(level.var.stepLava){
            level.steps-=1//если игрок наступил на лаву ход вычтется еще раз
        }
        if(level.var.haveKey){
            level.objData.blocks.block.shift()//удаляет первый эелмент из блоков который обязан быть на месте двери
            level.objData.item.key.length=0//удаление ключа
            level.objData.item.door.length=0//открытие двери
        }
        store.update()
    })
}


export default store
window.store=store