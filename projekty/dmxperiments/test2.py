from dmx import Colour, DMXInterface, DMXLight3Slot, DMXUniverse

PURPLE = Colour(255, 0, 255)
# 37 24 38 43
# Open an interface
with DMXInterface("FT232R") as interface:
    # Create a universe
    universe = DMXUniverse()

    # Define a light
    light = DMXLight3Slot(address=8)

    # Add the light to a universe
    universe.add_light(light)

    # Update the interface's frame to be the universe's current state
    interface.set_frame(universe.serialise())

    # Send an update to the DMX network
    interface.send_update()

    # Set light to purple
    light.set_colour(PURPLE)

    # Update the interface's frame to be the universe's current state
    interface.set_frame(universe.serialise())

    # Send an update to the DMX network
    interface.send_update()