import rtmidi
import time
from time import sleep
from colors import get_event_color_map as to_lp_color

LIGHTING_TYPE_RGB = 0x03
class Launchpad:
    def __init__(self):
        self.midi_port = None
        mo = rtmidi.MidiOut()
        for port_no in range(mo.get_port_count()):
            port_name = mo.get_port_name(port_no)
            print("MIDI out:", port_name)
            if port_name.find('Launchpad Mini MK3 LPMiniMK3 MIDI In') > -1: 
                self.midi_port = mo.open_port(port_no)
                return
                
    def send(self, message):
        self.midi_port.send_message(message)

    # docs: https://global.novationmusic.com/support/downloads/launchpad-programmers-reference-guide

    def get_lightup_message(self, position, color):
        return [144,  position, color]
        

    def set_background_color(self, event_color):
        # r = event_color[0] // 2
        # g = event_color[1] // 2
        # b = event_color[2] // 2
        # color_spec = []
        for i in range(8):
            for j in range(8):
                # color_spec.append(LIGHTING_TYPE_RGB)
                # color_spec.append( 10 * (i + 1) + (j + 1) )
                msg = []
                msg.append(144) # light up, solid
                msg.append(10 * (i + 1) + (j + 1))
                msg.append(event_color)
                self.send(msg)
                # r = r // 2
                # g = g // 2
                # b = b // 2
                # color_spec.append(g)
                # color_spec.append(b)                
        # return [0xF0, 0x00, 0x20, 0x29, 0x02, 0x0d, 0x03, *color_spec, 0xF7]
    
    def is_ongoing_event(self, event, current_time=time.time()):
        """returns True if the event is ongoing
        TESTS:
        >>> is_ongoing_event({"start_hour": 1, "end_hour": 2}, current_time=4)
        False
        >>> is_ongoing_event({"start_hour": 1, "end_hour": 3}, current_time=2)
        True
        """
        return int(current_time) > event["start_hour"] and int(current_time) < event["end_hour"]

    # def event_to_display_data_old(self, event):
    #     event_start_hour = int(event["start_hour"])
    #     event_end_hour = int(event["end_hour"])
    #     event_color = event["color"]
    #     r = event_color[0] // 2
    #     g = event_color[1] // 2
    #     b = event_color[2] // 2
    #     position = self.event_hour_to_pad_position(event_start_hour) 
    #     # color_spec = [LIGHTING_TYPE_RGB, position, r, g, b]
    #     return [0xF0, 0x00, 0x20, 0x29, 0x02, 0x0d, 0x03, *color_spec, 0xF7]


    def event_to_display_data(self, event):
        event_start_hour = int(event["start_hour"])
        # event_end_hour = int(event["end_hour"])
        event_color = to_lp_color(event["color_id"])
        position = self.event_hour_to_pad_position(event_start_hour) 
        return self.get_lightup_message(position, event_color)
    
        color_spec = [LIGHTING_TYPE_RGB, position, r, g, b]
        return [0xF0, 0x00, 0x20, 0x29, 0x02, 0x0d, 0x03, *color_spec, 0xF7]

    def display_events(self, events):
        self.set_background_color(66)
        events_data = []
        background_msg = []
        for event in events:
            event_data = self.event_to_display_data(event)
            events_data.append(event_data)
            if self.is_ongoing_event(event):
                background_msg = self.set_background_color(event.color)
        if background_msg:    
            self.send(background_msg)
            
        for data in events_data:
            self.send(data)


    def event_hour_to_pad_position(self, hour: int):
        """
        this should return the position of the pad that corresponds to the given hour
        TESTS:
        >>> event_hour_to_pad_position(8)
        11
        >>> event_hour_to_pad_position(13)
        61
        >>> event_hour_to_pad_position(0)
        0
        >>> event_hour_to_pad_position(7)
        0
        >>> event_hour_to_pad_position(23)
        82
        
        """
        if hour < 8:
            return 99
        if hour > 23:
            return 99
        
        c1 = [11, 21, 31, 41, 51, 61, 71, 81] # column 1
        c2 = [12, 22, 32, 42, 52, 62, 72, 82] # column 2
        c1.reverse()
        c2.reverse()
        
        return (c1 + c2)[hour-8]

# ----------------------------------------------------------------------------------------------------------------------------------------

def get_text_scroll_message(text, color=1, loop=1, speed=15, color_mode=0):
    text_ascii = list(map(ord, list(text))) # better?
    return [ 240, 0, 32, 41, 2, 13, 7, 
            loop, speed, color_mode, color, 
            *text_ascii,
            247]



def get_programmer_mode_msg():
    return [240, 0, 32, 41, 2, 13, 14, 1, 247]

def main():
    lp = Launchpad()
    # brightness = 127
    # brightness_msg = [int(x) for x in f"240 0 32 41 2 13 8 {brightness} 247".split(" ")]
    # lp.send([0xF0, 0x00, 0x20, 0x29, 0x02, 0x18, 0x0E, 80, 255, 255, 0xF7]) # 7 and 28 are position and color, taken from the docs
    # lp.send(get_text_scroll_message("dupa"))
    # lp.send(lp.get_background_color_message([255, 0, 0]))
    # sleep(3)
    
if __name__ == '__main__':
    main()