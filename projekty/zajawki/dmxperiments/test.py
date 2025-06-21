import dmx as pydmx
import time

def sterowanie_swiatlem(universe, address, r, g, b, dimmer=255):
    """
    Funkcja sterująca światłem LED PAR podłączonym przez DMX.
    """
    
    # Inicjalizacja kontrolera DMX
    dmx = pydmx.PyDMXController(device_name = 'enttec-usb-dmx-pro')  # Replace with your device's name if different

    # Upewnienie się, że urządzenie jest otwarte
    if not dmx.initialize_controller():
        print("Błąd inicjalizacji kontrolera DMX!")
        return

    # Ustawienie wartości kanałów DMX (RGB i dimmer)
    dmx.set_channel(address, r)    # Czerwony
    dmx.set_channel(address + 1, g)  # Zielony
    dmx.set_channel(address + 2, b)  # Niebieski
    dmx.set_channel(address + 3, dimmer)  # Dimmer

    # Renderowanie zmian (wysłanie danych DMX)
    dmx.render()

    # Zamknięcie kontrolera DMX po zakończeniu (opcjonalne)
    # dmx.close_controller()


# Przykład użycia:
if __name__ == "__main__":
    universe = 1
    address = 1

    sterowanie_swiatlem(universe, address, 255, 0, 0)
    time.sleep(1)
    sterowanie_swiatlem(universe, address, 0, 255, 0, dimmer=127)