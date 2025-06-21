import functools

class AnnouncerMeta(type):
    def __new__(cls, class_name, bases, namespace):
        for name, func in list(namespace.items()):
            if callable(func):
                new_name = str(name)
                @functools.wraps(func)
                def call_wrapper(*args, **kwargs):
                    try:
                        return func(*args, **kwargs)
                    finally:
                        print(f"Called {new_name}")
                namespace[new_name] = call_wrapper
        return type.__new__(cls, class_name, bases, namespace)

class ExampleClass(metaclass=AnnouncerMeta):
    
    def foo(self, n):
        return f"foo{n}"
    def bar(self, n):
        return f"bar{n}"
    

instance1 = ExampleClass()

print(instance1.foo(1) + instance1.bar(2))
