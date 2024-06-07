def get_event_color_rgb(color_id, color_set='dynamic'):
    """Converts a Google Calendar event color ID to its RGB value.

    Args:
        color_id: The color ID of the event (string).
        color_set: The color set used by the calendar ('classic' or 'dynamic').

    Returns:
        A tuple of three integers representing the RGB value (R, G, B).
    """
    
    # Google Calendar Color Palettes
    classic_colors = {
        '1': (209, 27, 27),  # Pomegranate
        '2': (244, 67, 54),  # Flamingo
        '3': (233, 30, 99),  # Pink
        '4': (156, 39, 176), # Purple
        '5': (103, 58, 183), # Dark Purple
        '6': (63, 81, 181),  # Indigo
        '7': (33, 150, 243), # Blue
        '8': (3, 169, 244),  # Light Blue
        '9': (0, 188, 212),  # Cyan
        '10': (0, 150, 136), # Teal
        '11': (76, 175, 80),  # Green
        '12': (139, 195, 74), # Light Green
        '13': (205, 220, 57), # Lime
        '14': (255, 235, 59), # Yellow
        '15': (255, 193, 7),  # Amber
        '16': (255, 152, 0),  # Orange
        '17': (255, 87, 34),  # Deep Orange
        '18': (121, 85, 72),  # Brown
        '19': (158, 158, 158), # Grey
        '20': (96, 125, 139),  # Blue Grey
        '21': (255, 255, 255), # White
        '22': (0, 0, 0), # Black
        '23': (117, 117, 117) # Graphite
    }

    dynamic_colors = {
        '1': (125, 77, 227),   # Lavender
        '2': (77, 144, 254),   # Sage
        '3': (77, 208, 225),   # Grape
        '4': (0, 224, 130),    # Flamingo
        '5': (248, 187, 208),  # Banana
        '6': (255, 202, 40),   # Tangerine
        '7': (255, 138, 101),  # Peacock
        '8': (128, 139, 150),  # Graphite
        '9': (171, 184, 195)   # Blueberry
    }

    colors = classic_colors if color_set == 'classic' else dynamic_colors

    return colors.get(color_id, (0, 0, 0))  # Default to black if color not found

def get_event_color_map(color:str):
    return {        
        '1': 79,   # Lavender
        '2': 30,   # Sage
        '3': 49,   # Grape
        '4': 107,    # Flamingo
        '5': 13,  # Banana
        '6': 9,   # Tangerine
        '7': 68,  # Peacock
        '8': 3,  # Graphite
        '9': 45,   # Blueberry
        '10': 64, # Green
        '11' : 7 # red
        }.get(color, 108)  # Default to black if color not found




def main():
    # Example usage:
    color_id = '11'  # Green in classic color set
    color_set = 'classic'

    rgb_value = get_event_color_map(color_id)
 
if __name__ == '__main__':
    main()


