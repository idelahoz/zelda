function ImagenOriginal () {
    mySprite.setImage(assets.image`myImage`)
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.y += -2
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`attack_right`)
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += 2
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`left`)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    ImagenOriginal()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    ImagenOriginal()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`right`)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    ImagenOriginal()
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.y += 2
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += -2
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
forever(function () {
    music.play(music.stringPlayable("C B - G E - E C5 ", 120), music.PlaybackMode.UntilDone)
})
