import rtmidi

CLEAR_MESSAGE = clear_msg = [240, 0, 32, 41, 2, 16, 14, 0, 247]


def get_text_scroll_message(text, color=1, loop=1, speed=15, color_mode=0):
    text_ascii = list(map(ord, list(text))) # better?
    return [ 240, 0, 32, 41, 2, 13, 7, 
            loop, speed, color_mode, color, 
            *text_ascii,
            247]

def open_port():
    midi = rtmidi.MidiOut()
    midi_port = None
    ports = []
    for port_no in range(midi.get_port_count()):
        port_name = midi.get_port_name(port_no)
        if port_name.find('Launchpad Pro Standalone Port') > -1:
            midi_port = rtmidi.MidiOut().open_port(port_no)
        elif port_name.find('Launchpad Mini') > -1:
            midi_port = rtmidi.MidiOut().open_port(port_no)
            ports.append(midi_port)

    return ports

def createLightUpMessage(position, color):
    return [144, position, color]


def clear_launchpad():
    port.send_message(CLEAR_MESSAGE)


def light_up(port, position, color):
    message = createLightUpMessage(position, color)
    port.send_message(message)


def light_up(colourspec):
    if type(colourspec) == int:
        colourspec = [colourspec]
    return   [240, 0, 32, 41, 2, 13, 3, *colourspec, 247]

def main():
    ports = open_port()
    # ports[2].send_message(get_text_scroll_message("A R O T   ", color=7,speed=22))
    # ports[0].send_message(get_text_scroll_message("T A R O T ", color=14, speed=22))
    ports[1].send_message(get_text_scroll_message("-", color=14, speed=22))
    

if (__name__ == '__main__'):
    main()