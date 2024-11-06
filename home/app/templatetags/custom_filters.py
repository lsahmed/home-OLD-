from django import template

register = template.Library()

def split(value, arg):
    """ Split the string by the given delimiter."""
    return value.split(arg)

register.filter('split',split)