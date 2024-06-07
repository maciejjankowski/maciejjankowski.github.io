import rtmidi
import time

events = [{
    11: "Kitchen",
}]

def scroll_text(text):
    print(text)

def display_event_details(location):
    scroll_text(events[location])


def respond_to_pad(midi_message):
    # Extract message components
    status_byte, location, velocity = midi_message

    print(f"Status: {status_byte}, Location: {location}, Velocity: {velocity}")
    
    # Check if it's a note-on message on pad 11 
    if status_byte == 0x90 and velocity > 0: 
        display_event_details(location)


def main():
    midiin = rtmidi.MidiIn()
    available_ports = midiin.get_ports()

    # Find Launchpad's input port (might need adjustment if you have multiple MIDI devices)
    launchpad_port = None
    for port_num, port_name in enumerate(available_ports):
        print(f"Port {port_num}: {port_name}")
        if "LPMiniMK3 MIDI" in port_name:
            launchpad_port = port_num
            # break

    if launchpad_port is None:
        raise Exception("Could not find Launchpad Mini MK3!")

    midiin.open_port(launchpad_port)
    midiin.set_callback(respond_to_pad)  # Set callback function
    midiin.set_error_callback(lambda x : print (x))
    print("Waiting for MIDI input from pad 11. Press Ctrl+C to quit.")
    try:
        while True:
            time.sleep(0.1)  # Sleep briefly to avoid excessive CPU usage

    except KeyboardInterrupt:
        print("Exiting...")

if __name__ == "__main__":
    main()
