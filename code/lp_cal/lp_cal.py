import midi_display as display
import events as events

def main(): 
    lp = display.Launchpad()
    lp.send(lp.get_programmer_mode_msg())
    events_list = events.get_todays_calendar_events()
    lp.display_events(events_list)


if __name__ == "__main__":
    main()
