input.onButtonPressed(Button.A, function () {
    主角.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    大招1 = game.createSprite(主角.get(LedSpriteProperty.X) + 1, 主角.get(LedSpriteProperty.Y))
    大招2 = game.createSprite(主角.get(LedSpriteProperty.X) - 1, 主角.get(LedSpriteProperty.Y))
    for (let index = 0; index < 5; index++) {
        basic.pause(100)
        大招1.change(LedSpriteProperty.Y, -1)
        大招2.change(LedSpriteProperty.Y, -1)
    }
    大招1.delete()
    大招2.delete()
})
input.onButtonPressed(Button.B, function () {
    主角.change(LedSpriteProperty.X, 1)
})
let 大招2: game.LedSprite = null
let 大招1: game.LedSprite = null
let 主角: game.LedSprite = null
game.setScore(0)
主角 = game.createSprite(2, 4)
let 飛機 = game.createSprite(0, 0)
let cd = 1
basic.forever(function () {
    basic.pause(randint(100, 300))
    飛機.change(LedSpriteProperty.X, 1)
    if (飛機.get(LedSpriteProperty.X) == 4) {
        basic.pause(randint(100, 300))
        飛機.set(LedSpriteProperty.X, 0)
        飛機.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (飛機.isTouching(主角)) {
        music.playMelody("C5 B A G F E D C ", 170)
        game.gameOver()
    }
})
basic.forever(function () {
    if (大招1) {
        if (大招1.isTouching(飛機) || 大招2.isTouching(飛機)) {
            if (cd == 0) {
                cd = 1
            }
            game.addScore(1)
            飛機.set(LedSpriteProperty.X, 0)
            飛機.set(LedSpriteProperty.Y, 0)
        }
    }
})
