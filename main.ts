controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -60
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . f f . . . 
    . . f 1 1 f . . 
    . f 1 9 f 9 f . 
    . f 1 9 f 9 f . 
    . . f 1 1 f . . 
    . . . f f . . . 
    . . . . . . . . 
    . . f 6 6 f . . 
    `, SpriteKind.Player)
tiles.loadMap(tiles.createSmallMap(tilemap`level7`))
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
controller.moveSprite(mySprite, 50, 0)
forever(function () {
    mySprite.vy += 2.5
})
