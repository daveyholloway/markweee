max7219_matrix.setup(4,
    DigitalPin.P16,
    DigitalPin.P15,
    DigitalPin.P14,
    DigitalPin.P13)
max7219_matrix.for_4_in_1_modules(rotation_direction.CLOCKWISE, False)
message = "Bugger Off!"

def on_forever():
    basic.show_string(message)
    max7219_matrix.scroll_text(message, 75, 500)
basic.forever(on_forever)
