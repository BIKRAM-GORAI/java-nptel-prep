// NPTEL Java Full Exam Dataset
window.QUIZ_DATA = [
  {
    "id": "W01_Q01",
    "week": 1,
    "num": 1,
    "category": "Theory Quiz MCQ",
    "question": "**Consider the following program:**\n```java\nclass NPTEL {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}\n```\n**What is the output of the above code?**",
    "options": [
      "Hello, World!",
      "HelloWorld!",
      "Compilation Error",
      "Runtime Error"
    ],
    "correctIndex": 0,
    "explanation": "- The `main` method is standard and correctly structured: `public static void main(String[] args)`.\n- `System.out.println(...)` prints the exact string passed to it along with a terminating newline character.\n- The string passed is `\"Hello, World!\"`, with a comma and space preserved. Therefore, the output is `Hello, World!`.\n- There are no syntax errors or exceptions thrown at runtime.\n\n---"
  },
  {
    "id": "W01_Q02",
    "week": 1,
    "num": 2,
    "category": "Theory Quiz MCQ",
    "question": "**A Java file with extension `.class` contains:**",
    "options": [
      "Java source code",
      "HTML tags",
      "Java Byte code",
      "A program file written in Java programming language"
    ],
    "correctIndex": 2,
    "explanation": "- In Java, human-readable source code is saved with a `.java` extension.\n- When compiled via the Java compiler (`javac`), it produces intermediate, architecture-neutral instructions known as bytecode, stored in `.class` files.\n- The JVM (Java Virtual Machine) executes this bytecode.\n\n---"
  },
  {
    "id": "W01_Q03",
    "week": 1,
    "num": 3,
    "category": "Theory Quiz MCQ",
    "question": "**Which of the following is NOT an object-oriented programming paradigm?**",
    "options": [
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Dynamic memory allocation"
    ],
    "correctIndex": 3,
    "explanation": "- The four core pillars/paradigms of Object-Oriented Programming (OOP) are:\n  1. **Encapsulation** (wrapping data and methods together)\n  2. **Inheritance** (deriving new classes from existing ones)\n  3. **Polymorphism** (ability to take multiple forms)\n  4. **Abstraction** (hiding internal implementation details)\n- **Dynamic memory allocation** is a memory management feature/technique present in both procedural languages (like C via `malloc`/`calloc`) and object-oriented languages, but it is **not** an OOP paradigm.\n\n---"
  },
  {
    "id": "W01_Q04",
    "week": 1,
    "num": 4,
    "category": "Theory Quiz MCQ",
    "question": "**What is the correct sequence of steps to execute a Java program?**",
    "options": [
      "Run -> Edit -> Compile",
      "Edit -> Run -> Compile",
      "Compile -> Edit -> Run",
      "Edit -> Compile -> Run"
    ],
    "correctIndex": 3,
    "explanation": "- The standard software development lifecycle for Java programs is:\n  1. **Edit**: Writing/modifying the source code in an editor (saved as `.java`).\n  2. **Compile**: Invoking `javac Filename.java` to translate source code into bytecode (`Filename.class`).\n  3. **Run**: Executing the bytecode on the JVM using `java Filename`.\n\n---"
  },
  {
    "id": "W01_Q05",
    "week": 1,
    "num": 5,
    "category": "Theory Quiz MCQ",
    "question": "**Which program is used to compile Java source code into bytecode?**",
    "options": [
      "javap",
      "javac",
      "java",
      "javad"
    ],
    "correctIndex": 1,
    "explanation": "- `javac`: The Java compiler utility that converts `.java` source code into `.class` bytecode.\n- `java`: The Java application launcher/interpreter used to run compiled Java bytecode on the JVM.\n- `javap`: The Java class file disassembler that inspects bytecode in `.class` files.\n- `javad`: Not a standard Java development tool.\n\n---"
  },
  {
    "id": "W01_Q06",
    "week": 1,
    "num": 6,
    "category": "Theory Quiz MCQ",
    "question": "**In Java, what is the role of the `public static void main(String[] args)` method?**",
    "options": [
      "Initialization method",
      "Execution entry point",
      "Constructor",
      "Destructor"
    ],
    "correctIndex": 1,
    "explanation": "- The JVM specifically looks for the `public static void main(String[] args)` method signature as the starting point (entry point) of any standalone Java application.\n- Execution begins at the first statement inside `main` and terminates when `main` completes (or all non-daemon threads exit).\n- Constructors initialize newly created objects, and Java uses automatic garbage collection rather than destructors.\n\n---"
  },
  {
    "id": "W01_Q07",
    "week": 1,
    "num": 7,
    "category": "Theory Quiz MCQ",
    "question": "**Which of the following is not a feature of Java?**",
    "options": [
      "Platform Independence",
      "Object-Oriented Programming",
      "Supports Explicit Pointers",
      "Supports Polymorphism"
    ],
    "correctIndex": 2,
    "explanation": "- Java intentionally omitted explicit pointers (such as pointer arithmetic, dereferencing `*ptr`, and address-of `&` operators found in C/C++) to enhance security and prevent memory corruption.\n- Java references objects via safe reference handles internally, but developers cannot directly manipulate memory addresses.\n- Platform independence, OOP, and polymorphism are well-known foundational features of Java.\n\n---"
  },
  {
    "id": "W01_Q08",
    "week": 1,
    "num": 8,
    "category": "Theory Quiz MCQ",
    "question": "**What is the primary purpose of the Java Virtual Machine (JVM) in the Java programming language?**",
    "options": [
      "Graphical User Interface",
      "Platform independence",
      "Code Debugging",
      "Game Engine"
    ],
    "correctIndex": 1,
    "explanation": "- The JVM provides an abstraction layer between the compiled bytecode and the underlying hardware and OS.\n- This fulfills Java's \"Write Once, Run Anywhere\" (WORA) philosophy: identical bytecode runs identically on any system where an appropriate JVM implementation is installed.\n\n---"
  },
  {
    "id": "W01_Q09",
    "week": 1,
    "num": 9,
    "category": "Theory Quiz MCQ",
    "question": "**Consider the following program:**\n```java\npublic class Question {\n    public static void main(String[] args) {\n        int x = 5;\n        x *= (2 + 8);\n        System.out.println(x);\n    }\n}\n```\n**What is the output of the above code?**",
    "options": [
      "50",
      "10",
      "Compiler error",
      "5"
    ],
    "correctIndex": 0,
    "explanation": "- Initial value of `x` is `5`.\n- Expression: `x *= (2 + 8)`.\n- Parentheses have higher precedence, so `(2 + 8)` evaluates to `10`.\n- The compound assignment operator `*=` expands to: `x = x * 10`.\n- Therefore, `x = 5 * 10 = 50`.\n- `System.out.println(x)` prints `50`.\n\n---"
  },
  {
    "id": "W01_Q10",
    "week": 1,
    "num": 10,
    "category": "Theory Quiz MCQ",
    "question": "**Which of the following is true regarding how Java handles code execution?**",
    "options": [
      "Java uses only interpreter.",
      "Java uses only compiler.",
      "Java uses both interpreter and compiler.",
      "None of the above."
    ],
    "correctIndex": 2,
    "explanation": "- Java is a two-stage hybrid language:\n  1. **Compiler (`javac`)**: Compiles Java source code into platform-independent intermediate bytecode.\n  2. **Interpreter / JIT Compiler (JVM)**: Interprets bytecode line by line, and uses the Just-In-Time (JIT) compiler to compile hot code paths directly into native machine instructions for performance.\n\n---"
  },
  {
    "id": "W02_Q01",
    "week": 2,
    "num": 1,
    "category": "Theory Quiz MCQ",
    "question": "**What is the correct signature of the `main` method in Java?**",
    "options": [
      "`public static void main(String[] args)`",
      "`public void main(String args[])`",
      "`void main(String[] args)`",
      "`public static void main(Sting [])`"
    ],
    "correctIndex": 0,
    "explanation": "- The standard signature expected by the JVM to launch an application is `public static void main(String[] args)`.\n- `public`: Accessible by JVM from outside the class package.\n- `static`: Allows JVM to invoke the method without creating an instance of the containing class.\n- `void`: Returns no value.\n- `String[] args`: Accepts command-line string arguments. Option d mislabels `String` as `Sting` without parameter name, and options b and c lack `static` or `public`.\n\n---"
  },
  {
    "id": "W02_Q02",
    "week": 2,
    "num": 2,
    "category": "Theory Quiz MCQ",
    "question": "**Consider the code given below:**\n```java\npublic class VarPrint {\n    int x = 30;\n    static int y = 20;\n    public static void main(String[] args) {\n        VarPrint t1 = new VarPrint();\n        t1.x = 88;\n        t1.y = 99;\n        int z1 = t1.x + t1.y;\n        VarPrint t2 = new VarPrint();\n        System.out.println(t2.x + \" \" + t2.y + \" \" + z1);\n    }\n}\n```\n**What will be the output of the above Java program?**",
    "options": [
      "30 99 178",
      "30 88 129",
      "30 99 187",
      "99 99 187"
    ],
    "correctIndex": 2,
    "explanation": "- `x` is an instance variable; each object gets its own copy. Initialized to `30`.\n- `y` is a `static` (class) variable; shared among all instances of `VarPrint`.\n- `t1.x = 88`: Changes `x` only for instance `t1`.\n- `t1.y = 99`: Modifies the static variable `y` to `99` for the entire class.\n- `z1 = t1.x + t1.y = 88 + 99 = 187`.\n- `VarPrint t2 = new VarPrint()`: A new instance `t2` is created. Its instance variable `t2.x` has the default value `30`.\n- Since `y` is static and was updated to `99`, `t2.y` evaluates to `99`.\n- The print output is `30 + \" \" + 99 + \" \" + 187` -> `30 99 187`.\n\n---"
  },
  {
    "id": "W02_Q03",
    "week": 2,
    "num": 3,
    "category": "Theory Quiz MCQ",
    "question": "**Consider the code given below:**\n```java\npublic class ArgumentTest {\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.start();\n    }\n    \n    static class Test {\n        void start() {\n            int a = 4;\n            int b = 5;\n            System.out.print(\"\" + 8 + 3 + \"\");\n            System.out.print(a + b);\n            System.out.print(\" \" + a + b + \" \");\n            System.out.print(foo() + a + b + \" \");\n            System.out.println(a + b + foo());\n        }\n        \n        String foo() {\n            return \"foo\";\n        }\n    }\n}\n```\n**What will be the output of the code given above?**",
    "options": [
      "839 45foo45 9foo",
      "9 7 7 foo34 34foo",
      "72 34 34 foo34 34foo",
      "839 45foo45 9foo9"
    ],
    "correctIndex": 0,
    "explanation": "- `System.out.print(\"\" + 8 + 3 + \"\");` -> `\"\" + 8` results in `\"8\"`, `\"8\" + 3` becomes `\"83\"`. Output so far: `83`.\n- `System.out.print(a + b);` -> Both are integers: `4 + 5 = 9`. Printed immediately without space: `9`. Output so far: `839`.\n- `System.out.print(\" \" + a + b + \" \");` -> Starts with string `\" \"`. String concatenation occurs: `\" \"` + 4 -> `\" 4\"`, then + 5 -> `\" 45 \"`. Output so far: `839 45 `.\n- `System.out.print(foo() + a + b + \" \");` -> `foo()` returns `\"foo\"`. Concatenated with integers `4` and `5`: `\"foo45 \"`. Output so far: `839 45 foo45 `. (Note: the options print `45foo45` together).\n- `System.out.println(a + b + foo());` -> `a + b` are evaluated first as integer addition (`4 + 5 = 9`), then concatenated with `foo()` (`\"foo\"`), yielding `9foo`.\n- Final concatenated output matches **a. 839 45foo45 9foo**.\n\n---"
  },
  {
    "id": "W02_Q04",
    "week": 2,
    "num": 4,
    "category": "Theory Quiz MCQ",
    "question": "**Which keyword is used in Java to refer to the current object?**",
    "options": [
      "this",
      "that",
      "self",
      "current"
    ],
    "correctIndex": 0,
    "explanation": "- In Java, `this` is a reference variable that refers to the current object whose method or constructor is being invoked.\n- `self` is used in Python, while `that` and `current` are not keywords in Java.\n\n---"
  },
  {
    "id": "W02_Q05",
    "week": 2,
    "num": 5,
    "category": "Theory Quiz MCQ",
    "question": "**Which of the following is true about constructors in a class?**",
    "options": [
      "Constructors do not have a return type.",
      "Constructors aren't used to initialize objects.",
      "A class can have only one constructor.",
      "Constructors cannot be overloaded."
    ],
    "correctIndex": 0,
    "explanation": "- Constructors must have the exact same name as the enclosing class and have **no return type**, not even `void`.\n- If a return type is specified, the compiler treats it as a standard method, not a constructor.\n- Constructors can be overloaded (multiple constructors with different parameter lists) and their primary purpose is precisely to initialize newly created objects.\n\n---"
  },
  {
    "id": "W02_Q06",
    "week": 2,
    "num": 6,
    "category": "Theory Quiz MCQ",
    "question": "**Consider the following code snippet:**\n```java\nclass NPTEL_W2 {\n    int x;\n    NPTEL_W2(int x) {\n        this.x = x;\n    }\n    void printX() {\n        System.out.println(this.x);\n    }\n    public static void main(String[] args) {\n        NPTEL_W2 obj = new NPTEL_W2(000);\n        obj.printX();\n    }\n}\n```\n**What will be the output of the code given above?**",
    "options": [
      "0",
      "10",
      "100",
      "Runtime error"
    ],
    "correctIndex": 0,
    "explanation": "- An integer literal with a leading zero `0` is treated as an octal literal in Java.\n- `000` in octal represents decimal `0`.\n- The constructor initializes `this.x = 0`.\n- Calling `obj.printX()` prints `0`.\n\n---"
  },
  {
    "id": "W02_Q07",
    "week": 2,
    "num": 7,
    "category": "Theory Quiz MCQ",
    "question": "**Consider the code snippet given below (`\\n` in output is to be assumed to be the new line character):**\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello\");\n        System.out.println(\"World\");\n        System.out.printf(\"Number: %d\", 10);\n    }\n}\n```\n**What will be the output of the code given above?**",
    "options": [
      "Hello World\\nNumber: 10",
      "Hello WorldNumber: 10",
      "Hello\\nWorld\\nNumber: 10",
      "Hello World\\nNumber: 10\\n"
    ],
    "correctIndex": 2,
    "explanation": "- `System.out.println(\"Hello\")` prints `\"Hello\"` followed by a newline `\\n`.\n- `System.out.println(\"World\")` prints `\"World\"` followed by a newline `\\n`.\n- `System.out.printf(\"Number: %d\", 10)` formats and prints `\"Number: 10\"` without appending an extra newline.\n- Concatenating the lines with `\\n` gives: `Hello\\nWorld\\nNumber: 10`.\n\n---"
  },
  {
    "id": "W02_Q08",
    "week": 2,
    "num": 8,
    "category": "Theory Quiz MCQ",
    "question": "**Which class is used in Java to take runtime data input from the user?**",
    "options": [
      "BufferReader",
      "UserInputStreamReader",
      "Scanner",
      "DataInputStreamReader"
    ],
    "correctIndex": 2,
    "explanation": "- `java.util.Scanner` is the standard, simple utility class used to parse primitive types and strings using regular expressions from an input stream like `System.in`.\n- `BufferedReader` (spelled with `ed`, not `BufferReader`) is another class, but among the options provided, `c. Scanner` is the valid, correctly spelled class.\n\n---"
  },
  {
    "id": "W02_Q09",
    "week": 2,
    "num": 9,
    "category": "Theory Quiz MCQ",
    "question": "**How do you read a line of text from the console using the Scanner class in Java?**",
    "options": [
      "scanner.readLine()",
      "scanner.nextLine()",
      "scanner.getLine()",
      "scanner.fetchLine()"
    ],
    "correctIndex": 1,
    "explanation": "- `nextLine()` is the method of `java.util.Scanner` that advances this scanner past the current line and returns the input that was skipped.\n- `readLine()` belongs to `java.io.BufferedReader`, not `Scanner`.\n\n---"
  },
  {
    "id": "W02_Q10",
    "week": 2,
    "num": 10,
    "category": "Theory Quiz MCQ",
    "question": "**Which of the following is the correct way to declare a class in Java?**",
    "options": [
      "`public class MyClass {}`",
      "`class MyClass[] {}`",
      "`public MyClass class {}`",
      "`MyClass public class {}`"
    ],
    "correctIndex": 0,
    "explanation": "- The standard syntax to declare a class in Java is: `[access-modifier] class ClassName { ... }`.\n- `public class MyClass {}` is syntactically valid and standard.\n\n---"
  },
  {
    "id": "W03_Q01",
    "week": 3,
    "num": 1,
    "category": "Theory Quiz MCQ",
    "question": "**Which of the following statements is true regarding the order of execution of constructors in an inheritance hierarchy?**",
    "options": [
      "Derived class constructor will be called followed by the base class constructor.",
      "Only Base class constructor will be called.",
      "Only derived class constructor will be called.",
      "Base class constructor will be called followed by the derived class constructor."
    ],
    "correctIndex": 3,
    "explanation": "- When an object of a derived (sub) class is created, the base (super) class constructor must complete execution first before the subclass constructor executes.\n- Java enforces this by implicitly or explicitly inserting a call to `super()` as the very first statement inside any subclass constructor.\n- The order of execution cascades from top to bottom: Object class constructor -> Base class constructor -> Derived class constructor.\n\n---"
  },
  {
    "id": "W03_Q02",
    "week": 3,
    "num": 2,
    "category": "Theory Quiz MCQ",
    "question": "**The `super()` method is used to:**",
    "options": [
      "Call constructor of friend class",
      "Call constructor of the parent class",
      "Call constructor",
      "Is a declared method"
    ],
    "correctIndex": 1,
    "explanation": "- `super()` invokes the direct superclass (parent class) constructor from a subclass constructor.\n- If called explicitly, it must be the very first statement in the subclass constructor.\n- Java does not have the concept of \"friend classes\" (which exists in C++).\n\n---"
  },
  {
    "id": "W03_Q03",
    "week": 3,
    "num": 3,
    "category": "Theory Quiz MCQ",
    "question": "**What is the output of the following Java program?**\n```java\nclass Vehicle {\n    public void move() {\n        System.out.println(\"The vehicle moves\");\n    }\n}\nclass Car extends Vehicle {\n    public void move() {\n        System.out.println(\"The car moves\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Vehicle vehicle = new Car();\n        vehicle.move();\n    }\n}\n```",
    "options": [
      "\"The vehicle moves\"",
      "\"The car moves\"",
      "The code does not compile",
      "None of the above"
    ],
    "correctIndex": 1,
    "explanation": "- This demonstrates **dynamic method dispatch** (runtime polymorphism).\n- Even though the reference variable `vehicle` is of type `Vehicle`, the actual underlying object created in memory is of type `Car` (`new Car()`).\n- Because `move()` is an instance method overridden in `Car`, Java determines which version to execute at runtime based on the actual object instance, printing `\"The car moves\"`.\n\n---"
  },
  {
    "id": "W03_Q04",
    "week": 3,
    "num": 4,
    "category": "Theory Quiz MCQ",
    "question": "**Which of the following is NOT true regarding the `final` keyword in Java?**",
    "options": [
      "A final method cannot be overridden in a subclass.",
      "A final variable can only be assigned once.",
      "A final class can have subclasses.",
      "A final variable can be assigned during declaration or in the constructor."
    ],
    "correctIndex": 2,
    "explanation": "- Declaring a class as `final` prevents it from being extended (subclassed). For example, `java.lang.String` is a `final` class and cannot have subclasses.\n- Statement c is false (and therefore the correct answer to \"NOT true\").\n- Statements a, b, and d are accurate properties of the `final` keyword in Java.\n\n---"
  },
  {
    "id": "W03_Q05",
    "week": 3,
    "num": 5,
    "category": "Theory Quiz MCQ",
    "question": "**Which type of inheritance leads to the \"Diamond Problem\"?**",
    "options": [
      "Single level",
      "Multi-level",
      "Multiple",
      "Hierarchical"
    ],
    "correctIndex": 2,
    "explanation": "- The **Diamond Problem** occurs when a class inherits from two parent classes that both extend from a common superclass, causing ambiguity regarding which superclass implementation of a method should be inherited.\n- To prevent this ambiguity, Java does **not** allow multiple inheritance of classes (a class cannot extend more than one class), though multiple inheritance of type is supported via `interface`s.\n\n---"
  },
  {
    "id": "W03_Q06",
    "week": 3,
    "num": 6,
    "category": "Theory Quiz MCQ",
    "question": "**Members of a class which are not intended to be inherited by subclasses should be declared as:**",
    "options": [
      "Public members",
      "Protected members",
      "Private members",
      "Private or Protected members"
    ],
    "correctIndex": 2,
    "explanation": "- `private` members (variables and methods) are only accessible within the class in which they are declared. Subclasses cannot inherit or access them directly.\n- `protected` members are explicitly designed to be accessible by subclasses (as well as classes in the same package).\n- `public` members are accessible everywhere.\n\n---"
  },
  {
    "id": "W03_Q07",
    "week": 3,
    "num": 7,
    "category": "Theory Quiz MCQ",
    "question": "**In Java, is it possible to override a static method?**",
    "options": [
      "Yes, we can override a static method just like we do with instance methods.",
      "No, static methods cannot be overridden because they belong to the class, not the object.",
      "It depends on whether the static method is declared as final or not.",
      "It depends on the access modifier of the static method."
    ],
    "correctIndex": 1,
    "explanation": "- Method overriding relies on runtime polymorphism (dynamic binding) based on the object's runtime type.\n- Static methods are bound at compile time based on the class reference type (**method hiding** or shadowing, not overriding).\n- Therefore, static methods cannot be polymorphically overridden.\n\n---"
  },
  {
    "id": "W03_Q08",
    "week": 3,
    "num": 8,
    "category": "Theory Quiz MCQ",
    "question": "**What is the output of the following Java program?**\n```java\npublic class NptelExample {\n    public static int fun(int n) {\n        if (n == 0) {\n            return 1;\n        }\n        return n * fun(n - 1);\n    }\n    public static void main(String[] args) {\n        System.out.println(fun(5));\n    }\n}\n```",
    "options": [
      "5",
      "24",
      "120",
      "Runtime Error"
    ],
    "correctIndex": 2,
    "explanation": "- `fun(n)` computes the factorial of `n` recursively:\n  - $fun(5) = 5 \\times fun(4)$\n  - $fun(4) = 4 \\times fun(3)$\n  - $fun(3) = 3 \\times fun(2)$\n  - $fun(2) = 2 \\times fun(1)$\n  - $fun(1) = 1 \\times fun(0)$\n  - Base case: $fun(0) = 1$\n  - Product: $5 \\times 4 \\times 3 \\times 2 \\times 1 \\times 1 = 120$.\n\n---"
  },
  {
    "id": "W03_Q09",
    "week": 3,
    "num": 9,
    "category": "Theory Quiz MCQ",
    "question": "**Which of the following statements about abstract classes in Java is correct?**",
    "options": [
      "Abstract classes can be instantiated directly.",
      "An abstract class must contain at least one abstract method.",
      "A class inheriting from an abstract class must implement all its abstract methods unless it is itself abstract.",
      "Abstract classes can be marked as final."
    ],
    "correctIndex": 2,
    "explanation": "- An abstract class acts as a template/contract. Any concrete subclass extending it must provide concrete implementations for all inherited abstract methods; otherwise, the subclass must also be declared `abstract`.\n- Abstract classes cannot be instantiated directly with `new` (making a false).\n- An abstract class can have 0 abstract methods (making b false).\n- An abstract class cannot be `final` because `final` prevents inheritance while `abstract` demands inheritance (making d false).\n\n---"
  },
  {
    "id": "W03_Q10",
    "week": 3,
    "num": 10,
    "category": "Theory Quiz MCQ",
    "question": "**What will be the output of the below program?**\n```java\nclass superDemoClass {\n    final int a = 20;\n}\nclass subDemoClass extends superDemoClass {\n    void subFunc() {\n        a = 40;\n        System.out.println(\"value of a = \" + a);\n    }\n}\nclass demo {\n    public static void main(String[] args) {\n        subDemoClass subc = new subDemoClass();\n        subc.subFunc();\n    }\n}\n```",
    "options": [
      "value of a = 20",
      "error: cannot assign a value to final variable a",
      "error: unknown variable 'a' in class subDemoClass",
      "value of a = 40"
    ],
    "correctIndex": 1,
    "explanation": "- In `superDemoClass`, the variable `a` is declared with the `final` modifier (`final int a = 20;`).\n- In `subDemoClass`, `subFunc()` attempts to reassign `a = 40;`.\n- Because final variables are constants and cannot be re-assigned once initialized, the Java compiler produces a compilation error: `cannot assign a value to final variable a`.\n\n---"
  },
  {
    "id": "W04_Q01",
    "week": 4,
    "num": 1,
    "category": "Theory Quiz MCQ",
    "question": "**What is the process by which we can control what parts of a program can access the members of a class?**",
    "options": [
      "Polymorphism",
      "Augmentation",
      "Encapsulation",
      "Recursion"
    ],
    "correctIndex": 2,
    "explanation": "- **Encapsulation** binds data (fields) and code (methods) together into a single unit (class) and restricts direct outside access to internal components using access specifiers (`private`, `default`, `protected`, `public`).\n- This mechanism implements information hiding and controlled accessibility.\n\n---"
  },
  {
    "id": "W04_Q02",
    "week": 4,
    "num": 2,
    "category": "Theory Quiz MCQ",
    "question": "**Consider the program given below:**\n```java\npublic class Main {\n    public static void main(String args[]) {\n        System.out.println(cos(2*PI));\n    }\n}\n```\n**What will be the output if the program is executed?**",
    "options": [
      "It will give compile-time error",
      "It will give run-time error",
      "1.0",
      "3.14"
    ],
    "correctIndex": 0,
    "explanation": "- `cos()` and `PI` are static members of the `java.lang.Math` class.\n- Unless accessed via `Math.cos(2 * Math.PI)` or statically imported via `import static java.lang.Math.*;`, the Java compiler cannot resolve symbols `cos` and `PI`, resulting in a compilation error: `cannot find symbol`.\n\n---"
  },
  {
    "id": "W04_Q03",
    "week": 4,
    "num": 3,
    "category": "Theory Quiz MCQ",
    "question": "**Consider the following code:**\n```java\nclass Person {\n    int a = 0;\n    int b = 1;\n    public Person() {\n        System.out.print(a + b + \"Java\" + a);\n    }\n}\nclass Employee extends Person {\n    int a = 0;\n    int b = 1;\n    public Employee() {\n        System.out.print(a + b + \"Java\" + a);\n    }\n}\npublic class Question {\n    public static void main(String args[]) {\n        Person p = new Employee();\n    }\n}\n```\n**What will be the output of the code given above?**",
    "options": [
      "1Java01Java0",
      "1Java10Java0",
      "10Java0Java",
      "0Java11Java0"
    ],
    "correctIndex": 0,
    "explanation": "- Instantiating `new Employee()` first triggers the superclass constructor `Person()`.\n  - Inside `Person()`: `a + b` is evaluated as integer addition: `0 + 1 = 1`.\n  - Then string concatenation occurs: `1 + \"Java\"` -> `\"1Java\"`, followed by `+ a` (where `a = 0`) -> `\"1Java0\"`.\n- Next, the subclass constructor `Employee()` executes:\n  - Inside `Employee()`: `a + b` evaluates to `0 + 1 = 1`.\n  - Concatenation gives `\"1Java0\"`.\n- Total output printed sequentially is `1Java01Java0`.\n\n---"
  },
  {
    "id": "W04_Q04",
    "week": 4,
    "num": 4,
    "category": "Theory Quiz MCQ",
    "question": "**In Java, can a subclass in a different package access a superclass's protected method?**",
    "options": [
      "Yes, without any restrictions.",
      "Yes, but only if they are in the same package.",
      "No, protected methods are not accessible by subclasses.",
      "Yes, but only through inheritance (i.e., using super or this, not via an object)"
    ],
    "correctIndex": 3,
    "explanation": "- In Java, `protected` members are accessible within the same package freely, and across packages **only via inheritance** within the subclass (using `this`, `super`, or directly by method name inside the subclass).\n- A subclass in another package cannot instantiate an arbitrary superclass reference and invoke the protected method on that reference.\n\n---"
  },
  {
    "id": "W04_Q05",
    "week": 4,
    "num": 5,
    "category": "Theory Quiz MCQ",
    "question": "**A package is a collection of:**",
    "options": [
      "Only classes",
      "Only interfaces",
      "editing tools",
      "classes, methods and interfaces"
    ],
    "correctIndex": 3,
    "explanation": "- A Java package is a namespace that groups related classes, interfaces, and their contained methods/fields, helping avoid name conflicts and providing access protection.\n\n---"
  },
  {
    "id": "W04_Q06",
    "week": 4,
    "num": 6,
    "category": "Theory Quiz MCQ",
    "question": "**Consider the following 2 programs:**\n```java\n// Main1.java\npublic class Main1 {\n    public static void main(String args[]) {\n        int number = 10;\n        System.out.println(number++ + ++number);\n    }\n}\n\n// Main2.java\npublic class Main2 {\n    public static void main(String args[]) {\n        int number = 10;\n        System.out.println(++number + number++);\n    }\n}\n```\n**Choose the best option among the following for the code snippet given above:**",
    "options": [
      "Both pre-increment and post-increment operators becomes pre-increment during print.",
      "Both pre-increment and post-increment operators becomes post-increment during print.",
      "Both Main1 and Main2 classes give the same output (but can depend on the compiler).",
      "Pre-increment and post-increment operators don't work during print."
    ],
    "correctIndex": 2,
    "explanation": "- In `Main1`: `number` starts at `10`.\n  - `number++` evaluates to `10`, then `number` becomes `11`.\n  - `++number` increments `number` to `12` and evaluates to `12`.\n  - Expression result: $10 + 12 = 22$.\n- In `Main2`: `number` starts at `10`.\n  - `++number` increments `number` to `11` and evaluates to `11`.\n  - `number++` evaluates to `11`, then `number` becomes `12`.\n  - Expression result: $11 + 11 = 22$.\n- Both output `22`.\n\n---"
  },
  {
    "id": "W04_Q07",
    "week": 4,
    "num": 7,
    "category": "Theory Quiz MCQ",
    "question": "**Consider the following program:**\n```java\nclass Base {\n    public void print() {\n        System.out.println(\"Base class...\");\n    }\n}\nclass Derived extends Base {\n    public void print() {\n        System.out.println(\"Derived class...\");\n    }\n}\npublic class Main {\n    private static void main(String[] args) {\n        Base b = new Base();\n        b.print();\n        Derived d = new Derived();\n        d.print();\n    }\n}\n```\n**How many errors does this program contain?**",
    "options": [
      "None",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "- The `main` method in `public class Main` is declared as `private static void main(String[] args)`.\n- The application entry point must have `public` access so the JVM can invoke it from outside. Declaring `main` as `private` prevents the program from running properly as an application entry point.\n\n---"
  },
  {
    "id": "W04_Q08",
    "week": 4,
    "num": 8,
    "category": "Theory Quiz MCQ",
    "question": "**Consider the code given below:**\n```java\n// Teacher.java\npackage nptel1;\npublic class Teacher {\n    protected void showmarks() {\n        System.out.println(\"100 Marks\");\n    }\n}\n\n// Student.java\npackage nptel2;\nimport nptel1.*;\npublic class Student extends Teacher {\n    void show() {\n        showmarks();\n    }\n    public static void main(String[] args) {\n        Student st1 = new Student();\n        st1.show();\n    }\n}\n```\n**What is the output of the above Java Code Snippet with protected access modifier?**",
    "options": [
      "100 Marks",
      "No output",
      "Compiler error",
      "None of the above"
    ],
    "correctIndex": 0,
    "explanation": "- `Student` in package `nptel2` inherits from `Teacher` in package `nptel1`.\n- Because `showmarks()` is `protected`, it is accessible to subclass `Student` via inheritance.\n- Calling `st1.show()` successfully executes `showmarks()`, printing `100 Marks`.\n\n---"
  },
  {
    "id": "W04_Q09",
    "week": 4,
    "num": 9,
    "category": "Theory Quiz MCQ",
    "question": "**Choose the correct syntax of a Java Package below:**",
    "options": [
      "`package PACKAGE_NAME;`",
      "`package PACKAGE_NAME.*;`",
      "`pkg PACKAGE_NAME;`",
      "`pkg PACKAGE_NAME.*;`"
    ],
    "correctIndex": 0,
    "explanation": "- A package declaration starts with the keyword `package` followed by the package identifier and terminates with a semicolon `;`. Wildcard `*` is only used in `import` statements, not in `package` declarations.\n\n---"
  },
  {
    "id": "W04_Q10",
    "week": 4,
    "num": 10,
    "category": "Theory Quiz MCQ",
    "question": "**Which of these access specifiers must be used for `main()` method?**",
    "options": [
      "private",
      "public",
      "protected",
      "default"
    ],
    "correctIndex": 1,
    "explanation": "- The `main()` method signature must be `public` so that it can be invoked by the Java Virtual Machine runtime from outside the class.\n\n---"
  },
  {
    "id": "W05_Q01",
    "week": 5,
    "num": 1,
    "category": "Theory Quiz MCQ",
    "question": "**Which keyword is NOT used by Java during exception handling?**",
    "options": [
      "try",
      "catch",
      "final",
      "finally"
    ],
    "correctIndex": 2,
    "explanation": "- Java's exception handling keywords are: `try`, `catch`, `finally`, `throw`, and `throws`.\n- `final` is a non-access modifier used to define constants, prevent method overriding, and prevent class inheritance. It plays no role in exception handling syntax.\n\n---"
  },
  {
    "id": "W05_Q02",
    "week": 5,
    "num": 2,
    "category": "Theory Quiz MCQ",
    "question": "**What is the purpose of the `throws` keyword in Java?**",
    "options": [
      "To declare exceptions that a method can throw",
      "To throw an exception immediately",
      "To catch an exception",
      "It is not a keyword in Java"
    ],
    "correctIndex": 0,
    "explanation": "- `throws` is used in a method declaration to list checked exceptions that the method might propagate to its caller (e.g., `public void readFile() throws IOException`).\n- In contrast, `throw` (without 's') is an executable statement used inside method bodies to explicitly instantiate and throw an exception object immediately.\n\n---"
  },
  {
    "id": "W05_Q03",
    "week": 5,
    "num": 3,
    "category": "Theory Quiz MCQ",
    "question": "**Which of the following is TRUE about interfaces in Java?**",
    "options": [
      "Interfaces should always be defined as final",
      "Interfaces can be instantiated directly.",
      "Interfaces can extend multiple interfaces.",
      "Interfaces cannot have any method signatures"
    ],
    "correctIndex": 2,
    "explanation": "- An interface can inherit from multiple parent interfaces using the syntax: `interface ChildInterface extends ParentA, ParentB`.\n- Interfaces cannot be `final` because their purpose is to be implemented by classes.\n- Interfaces cannot be instantiated directly via `new`.\n\n---"
  },
  {
    "id": "W05_Q04",
    "week": 5,
    "num": 4,
    "category": "Theory Quiz MCQ",
    "question": "**What will be the output of the following code?**\n```java\ninterface Demo {\n    void display();\n}\nclass Test implements Demo {\n    public void display() {\n        System.out.println(\"Hello, NPTEL!\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Test obj = new Test();\n        obj.display();\n    }\n}\n```",
    "options": [
      "Hello, NPTEL!",
      "Compilation Error",
      "Runtime Error",
      "No Output"
    ],
    "correctIndex": 0,
    "explanation": "- `Test` implements `Demo` and provides a valid `public` implementation of the abstract interface method `display()`.\n- Instantiating `Test` and calling `obj.display()` prints `\"Hello, NPTEL!\"`.\n\n---"
  },
  {
    "id": "W05_Q05",
    "week": 5,
    "num": 5,
    "category": "Theory Quiz MCQ",
    "question": "**What will be the output of the following Java program?**\n```java\ninterface Calculator {\n    void calculate(int value);\n}\nclass Square implements Calculator {\n    int result;\n    public void calculate(int value) {\n        result = value * value;\n        System.out.print(\"Square: \" + result + \" \");\n    }\n}\nclass Cube extends Square {\n    public void calculate(int value) {\n        result = value * value * value;\n        super.calculate(value);\n        System.out.print(\"Cube: \" + result + \" \");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Calculator obj = new Cube();\n        obj.calculate(3);\n    }\n}\n```",
    "options": [
      "Square: 9 Cube: 9",
      "Cube: 27 Square: 9",
      "Square: 9 Square: 27 Cube: 27",
      "Square: 9 Cube: 27 Square: 27"
    ],
    "correctIndex": 0,
    "explanation": "1. An instance of `Cube` is assigned to reference `obj`. Calling `obj.calculate(3)` invokes `Cube.calculate(3)`.\n2. Inside `Cube.calculate(3)`:\n   - `result = value * value * value` assigns $3 \\times 3 \\times 3 = 27$ to the inherited field `result`.\n   - `super.calculate(value)` is called next.\n3. Inside `Square.calculate(3)`:\n   - `result = value * value` overwrites `result` with $3 \\times 3 = 9$.\n   - It prints `\"Square: 9 \"`.\n4. Execution returns to `Cube.calculate(3)`:\n   - It prints `\"Cube: \" + result + \" \"`.\n   - Because `Square.calculate(3)` modified `result` to `9`, `result` holds `9`!\n   - It prints `\"Cube: 9 \"`.\n5. Combined output: `Square: 9 Cube: 9 `.\n\n---"
  },
  {
    "id": "W05_Q06",
    "week": 5,
    "num": 6,
    "category": "Theory Quiz MCQ",
    "question": "**What will be the output of the following program?**\n```java\nclass NPTEL {\n    public static void main(String[] args) {\n        try {\n            int a = 5;\n            int b = 0;\n            System.out.println(a / b);\n        } catch (ArithmeticException e) {\n            System.out.print(\"Error \");\n        } finally {\n            System.out.print(\"Complete\");\n        }\n    }\n}\n```",
    "options": [
      "5 Complete",
      "Error Complete",
      "Runtime Error",
      "Compilation Error"
    ],
    "correctIndex": 1,
    "explanation": "- Evaluating `5 / 0` throws an `ArithmeticException` (division by zero).\n- Execution branches immediately to the `catch (ArithmeticException e)` block, printing `\"Error \"`.\n- The `finally` block always executes whether an exception is caught or not, printing `\"Complete\"`.\n- Total output: `Error Complete`.\n\n---"
  },
  {
    "id": "W05_Q07",
    "week": 5,
    "num": 7,
    "category": "Theory Quiz MCQ",
    "question": "**What will be the output of the following java program?**\n```java\ninterface A {\n    int x = 10;\n    void display();\n}\nclass B implements A {\n    public void display() {\n        System.out.println(\"Value of x: \" + x);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        B obj = new B();\n        obj.display();\n    }\n}\n```",
    "options": [
      "Value of x: 10",
      "Value of x: 0",
      "Compilation Error",
      "Runtime Error"
    ],
    "correctIndex": 0,
    "explanation": "- All variables declared inside an `interface` are implicitly `public static final` constants.\n- Implementing class `B` inherits constant `x`, so `System.out.println(\"Value of x: \" + x)` prints `Value of x: 10`.\n\n---"
  },
  {
    "id": "W05_Q08",
    "week": 5,
    "num": 8,
    "category": "Theory Quiz MCQ",
    "question": "**Which keyword is used by Java during exception handling?**",
    "options": [
      "final",
      "finally",
      "caught",
      "finished"
    ],
    "correctIndex": 1,
    "explanation": "- `finally` defines a block of code guaranteed to execute after the `try` and `catch` blocks complete.\n\n---"
  },
  {
    "id": "W05_Q09",
    "week": 5,
    "num": 9,
    "category": "Theory Quiz MCQ",
    "question": "**A method that potentially generates a checked exception must include this keyword in its method signature:**",
    "options": [
      "throw",
      "extend",
      "throws",
      "extends"
    ],
    "correctIndex": 2,
    "explanation": "- Checked exceptions must follow Java's \"Catch or Specify\" requirement. If a method does not handle a checked exception internally with `try-catch`, it must specify it in its signature using `throws`.\n\n---"
  },
  {
    "id": "W05_Q10",
    "week": 5,
    "num": 10,
    "category": "Theory Quiz MCQ",
    "question": "**Consider the following code:**\n```java\nclass Test extends Exception {}\nclass Main {\n    public static void main(String args[]) {\n        try {\n            throw new Test();\n        } catch (Test t) {\n            System.out.println(\"Got the Test Exception\");\n        } finally {\n            System.out.println(\"Inside finally block \");\n        }\n    }\n}\n```\n**What will be the output of the above code?**",
    "options": [
      "Got the Test Exception \\n Inside finally block",
      "Got the Test Exception",
      "Inside finally block",
      "Compiler Error"
    ],
    "correctIndex": 0,
    "explanation": "- `Test` extends `Exception` (custom checked exception).\n- `throw new Test()` throws an instance of `Test`, caught by `catch (Test t)`, printing `\"Got the Test Exception\"`.\n- The `finally` block executes next, printing `\"Inside finally block \"`.\n\n---"
  },
  {
    "id": "W06_Q01",
    "week": 6,
    "num": 1,
    "category": "Theory Quiz MCQ",
    "question": "**What is the primary difference between Byte Streams and Character Streams in Java?**",
    "options": [
      "Byte Streams handle characters, while Character Streams handle bytes.",
      "Byte Streams are used for binary data, while Character Streams are used for decimal data.",
      "Character Streams are faster than Byte Streams in all cases.",
      "Byte Streams are used for binary data, while Character Streams are used for text data."
    ],
    "correctIndex": 3,
    "explanation": "- Java I/O streams are divided into two main categories:\n  1. **Byte Streams** (`InputStream`, `OutputStream`): Read and write raw data 8 bits (1 byte) at a time, best suited for binary files like images, audio, video, and zip archives.\n  2. **Character Streams** (`Reader`, `Writer`): Read and write Unicode characters 16 bits (2 bytes) at a time, specifically optimized for handling internationalized character and text files.\n\n---"
  },
  {
    "id": "W06_Q02",
    "week": 6,
    "num": 2,
    "category": "Theory Quiz MCQ",
    "question": "**Which of the following best describes the concept of multithreading in Java?**",
    "options": [
      "Multiple threads execute concurrently, sharing the same memory space.",
      "Only one thread executes at a time, ensuring sequential execution.",
      "Threads in Java cannot communicate with each other.",
      "Threads require separate memory allocation for each thread to run."
    ],
    "correctIndex": 0,
    "explanation": "- Multithreading allows concurrent execution of two or more parts of a single process (program) for maximum CPU utilization.\n- Unlike separate OS processes (which have independent, isolated address spaces), threads belonging to the same Java process share the same common heap and method area (shared memory space), while each thread maintains its own private program counter, call stack, and local variables.\n\n---"
  },
  {
    "id": "W06_Q03",
    "week": 6,
    "num": 3,
    "category": "Theory Quiz MCQ",
    "question": "**Consider the code given below:**\n```java\nclass ExampleThread extends Thread {\n    public void run() {\n        System.out.println(\"Thread is running.\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        ExampleThread thread = new ExampleThread();\n        thread.start();\n        // thread.start();\n    }\n}\n```\n**What will happen when the above code is executed?**",
    "options": [
      "The program will execute successfully, printing \"Thread is running.\" twice.",
      "The program will throw an error when attempting to start the thread a second time.",
      "The program will terminate without any output.",
      "The program will execute successfully, printing \"Thread is running.\""
    ],
    "correctIndex": 3,
    "explanation": "- The second call `thread.start()` is commented out (`// thread.start();`).\n- If a thread were started twice, it would throw an `IllegalThreadStateException`.\n- However, since only one `thread.start()` is active, the thread transitions to RUNNABLE, its `run()` method executes on a separate thread of execution, and `\"Thread is running.\"` is printed successfully once.\n\n---"
  },
  {
    "id": "W06_Q04",
    "week": 6,
    "num": 4,
    "category": "Theory Quiz MCQ",
    "question": "**Which method is used to start a thread in Java?**",
    "options": [
      "`run()`",
      "`start()`",
      "`execute()`",
      "`begin()`"
    ],
    "correctIndex": 1,
    "explanation": "- The `start()` method of `java.lang.Thread` allocates native OS thread resources, transitions the thread into the RUNNABLE state, and invokes the `run()` method asynchronously on the new call stack.\n- Calling `run()` directly merely executes the code synchronously on the caller thread without creating a separate thread.\n\n---"
  },
  {
    "id": "W06_Q05",
    "week": 6,
    "num": 5,
    "category": "Theory Quiz MCQ",
    "question": "**Consider the code given below:**\n```java\nclass RunnableExample implements Runnable {\n    public void run() {\n        for (int i = 1; i <= 3; i++) {\n            System.out.println(\"Thread running: \" + i);\n        }\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        RunnableExample task = new RunnableExample();\n        Thread thread = new Thread(task);\n        thread.start();\n    }\n}\n```\n**What will happen when the above code is executed?**",
    "options": [
      "The program will throw a compile-time error because Runnable is not a thread.",
      "The program will execute successfully, and the run() method will run in a new thread.",
      "The program will execute the run() method directly on the main thread.",
      "The program will throw a runtime error because Runnable is not properly implemented."
    ],
    "correctIndex": 1,
    "explanation": "- `Runnable` is a functional interface representing a task.\n- Passing a `Runnable` target instance into `new Thread(task)` and calling `thread.start()` correctly registers the task and runs its `run()` method in a newly spawned worker thread.\n\n---"
  },
  {
    "id": "W06_Q06",
    "week": 6,
    "num": 6,
    "category": "Theory Quiz MCQ",
    "question": "**Which of the following states can a thread enter during its lifecycle in Java?**",
    "options": [
      "New, Runnable, Running, Blocked",
      "New, Runnable, Waiting, Blocked",
      "New, Runnable, Running, Sleeping, Dead",
      "New, Runnable, Waiting, Blocked, Terminated"
    ],
    "correctIndex": 3,
    "explanation": "- In the standard Java JVM specification (`java.lang.Thread.State`), the thread lifecycle states are:\n  - `NEW`\n  - `RUNNABLE`\n  - `BLOCKED`\n  - `WAITING`\n  - `TIMED_WAITING`\n  - `TERMINATED`\n- Notice that `Running` and `Dead` are conventional textbook terms, but `Terminated` and `Waiting` accurately represent official Java thread states.\n\n---"
  },
  {
    "id": "W06_Q07",
    "week": 6,
    "num": 7,
    "category": "Theory Quiz MCQ",
    "question": "**What does the thread scheduler use to decide which thread to run when multiple threads are in the runnable state?**",
    "options": [
      "Thread priority",
      "Thread's execution time",
      "Thread name",
      "Thread creation order"
    ],
    "correctIndex": 0,
    "explanation": "- The thread scheduler primarily relies on thread priorities (ranging from `MIN_PRIORITY = 1` to `MAX_PRIORITY = 10`, with `NORM_PRIORITY = 5` as default) along with preemptive or time-sliced scheduling algorithms to determine which runnable thread gets CPU allocation.\n\n---"
  },
  {
    "id": "W06_Q08",
    "week": 6,
    "num": 8,
    "category": "Theory Quiz MCQ",
    "question": "**Consider the code given below:**\n```java\nclass PriorityExample extends Thread {\n    public void run() {\n        System.out.println(Thread.currentThread().getName() + \" with priority \" + Thread.currentThread().getPriority());\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        PriorityExample t1 = new PriorityExample();\n        PriorityExample t2 = new PriorityExample();\n        t1.setPriority(Thread.MIN_PRIORITY);\n        t2.setPriority(Thread.MAX_PRIORITY);\n        t1.start();\n        t2.start();\n    }\n}\n```\n**Which of the following is true about the output?**",
    "options": [
      "The thread with the higher priority is guaranteed to execute first.",
      "The thread with the lower priority will never execute.",
      "The order of execution depends on the JVM and OS scheduling policies.",
      "The program will throw an error due to invalid priority values."
    ],
    "correctIndex": 2,
    "explanation": "- In Java, thread priority serves solely as a recommendation/hint to the underlying operating system's thread scheduler.\n- Thread scheduling is inherently non-deterministic and platform-dependent; higher priority does **not** guarantee earlier execution order.\n\n---"
  },
  {
    "id": "W06_Q09",
    "week": 6,
    "num": 9,
    "category": "Theory Quiz MCQ",
    "question": "**What is the primary purpose of thread synchronization in Java?**",
    "options": [
      "To allow multiple threads to execute a method at the same time",
      "To ensure thread execution follows a specific order",
      "To prevent race conditions and ensure data in-consistency",
      "To prevent race conditions and ensure data consistency"
    ],
    "correctIndex": 3,
    "explanation": "- When multiple threads concurrently access and modify shared resources or data, thread interference and race conditions can lead to corrupt, inconsistent state.\n- Synchronization (via `synchronized` methods, synchronized blocks, or locks) enforces mutual exclusion, ensuring only one thread can access the critical section at a time.\n\n---"
  },
  {
    "id": "W06_Q10",
    "week": 6,
    "num": 10,
    "category": "Theory Quiz MCQ",
    "question": "**Which of the following method returns a reference to the currently executing thread object?**",
    "options": [
      "`public static boolean interrupted();`",
      "`public static Thread currentThread();`",
      "`public final boolean isAlive();`",
      "`public final void suspend();`"
    ],
    "correctIndex": 1,
    "explanation": "- `Thread.currentThread()` is a public static method of `java.lang.Thread` that returns a reference to the specific thread object currently executing the caller's instructions.\n\n---"
  },
  {
    "id": "W07_Q01",
    "week": 7,
    "num": 1,
    "category": "Theory Quiz MCQ",
    "question": "Consider the following program:\n```java\nimport java.io.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            FileReader fr = new FileReader(\"NPTEL.txt\");\n            BufferedReader br = new BufferedReader(fr);\n            System.out.println(br.readLine());\n            br.close();\n        } catch (IOException e) {\n            System.out.println(\"Exception caught: \" + e.getMessage());\n        }\n    }\n}\n```\nIf the file `NPTEL.txt` contains the following text:\n```\nThis is Programming in Java online course.\nThis is Week 7 Assignment.\n```\nWhat will be the output of the program?",
    "options": [
      "`Exception caught: NPTEL.txt (No such file or directory)`",
      "`This is Programming in Java online course.`",
      "`This is Programming in Java online course. This is Week 7 Assignment.`",
      "`null`"
    ],
    "correctIndex": 1,
    "explanation": "- `BufferedReader.readLine()` reads a single line of text up to the newline character `\\n` or `\\r`.\n- It returns the line content without the line-termination characters.\n- Since `readLine()` is called only once, it reads and returns only the very first line: `\"This is Programming in Java online course.\"`.\n\n---"
  },
  {
    "id": "W07_Q02",
    "week": 7,
    "num": 2,
    "category": "Theory Quiz MCQ",
    "question": "Consider the following code snippet:\n```java\nimport java.io.File;\n\npublic class Main {\n    public static void main(String[] args) {\n        File file = new File(\"file.txt\");\n        if (_____) {\n            System.out.println(\"File exists.\");\n        } else {\n            System.out.println(\"File does not exist.\");\n        }\n    }\n}\n```\nWhich of the following method calls should be used in the blank to check if `file.txt` exists?",
    "options": [
      "`file.exists()`",
      "`file.isFile()`",
      "`file.checkFile()`",
      "`file.isAvailable()`"
    ],
    "correctIndex": 0,
    "explanation": "- In Java's `java.io.File` class, the method `public boolean exists()` tests whether the file or directory denoted by this abstract pathname exists.\n- `isFile()` tests whether the file denoted is a normal file (returns false if it doesn't exist or is a directory), but to specifically test existence in general, `exists()` is the standard method designed for this check.\n\n---"
  },
  {
    "id": "W07_Q03",
    "week": 7,
    "num": 3,
    "category": "Theory Quiz MCQ",
    "question": "What is the output of the following Java program?\n```java\nclass Main {\n    public static void main(String args[]) {\n        final int i;\n        i = 20;\n        i = 30;\n        System.out.println(i);\n    }\n}\n```",
    "options": [
      "`20`",
      "`Compiler Error`",
      "`30`",
      "`0`"
    ],
    "correctIndex": 1,
    "explanation": "- In Java, a variable declared `final` can be assigned/initialized only once.\n- Once a `final` variable has been assigned a value (`i = 20;`), attempting to assign a new value to it (`i = 30;`) triggers a compilation error: *\"cannot assign a value to final variable i\"*.\n\n---"
  },
  {
    "id": "W07_Q04",
    "week": 7,
    "num": 4,
    "category": "Theory Quiz MCQ",
    "question": "What is the return value of the `read()` method of an input stream when the end of the file is encountered?",
    "options": [
      "`0`",
      "`1`",
      "`-1`",
      "`null`"
    ],
    "correctIndex": 2,
    "explanation": "- In `java.io.InputStream` and `java.io.Reader`, the single-byte/single-character `read()` method returns an integer in the range 0 to 255 (for bytes) or 0 to 65535 (for characters).\n- When the end of the stream (EOF) is reached, it returns `-1` to unambiguously signal that no further data can be read.\n\n---"
  },
  {
    "id": "W07_Q05",
    "week": 7,
    "num": 5,
    "category": "Theory Quiz MCQ",
    "question": "Consider the following program:\n```java\nclass Calculator {\n    int num = 100;\n\n    public void calc(int num) {\n        this.num = num * 10;\n    }\n\n    public void printNum() {\n        System.out.println(num);\n    }\n\n    public static void main(String[] args) {\n        Calculator obj = new Calculator();\n        obj.calc(2);\n        obj.printNum();\n    }\n}\n```\nWhat is the output of the above code?",
    "options": [
      "`20`",
      "`100`",
      "`200`",
      "`2`"
    ],
    "correctIndex": 0,
    "explanation": "- `Calculator obj = new Calculator();` initializes `obj.num` to `100`.\n- In `calc(int num)`: `num` passed is `2`.\n- `this.num = num * 10;` explicitly assigns `2 * 10 = 20` to the instance variable `this.num`.\n- Calling `obj.printNum();` prints the current value of the instance variable `num`, which is `20`.\n\n---"
  },
  {
    "id": "W07_Q06",
    "week": 7,
    "num": 6,
    "category": "Theory Quiz MCQ",
    "question": "What is the primary difference between Byte Streams and Character Streams in Java?",
    "options": [
      "Byte Streams are used for reading data, while Character Streams are used for writing data.",
      "Byte Streams read and write 16-bit Unicode characters, while Character Streams read and write 8-bit bytes.",
      "Character Streams are faster than Byte Streams.",
      "Byte Streams are used for binary data, while Character Streams are used for text data."
    ],
    "correctIndex": 3,
    "explanation": "- Byte Streams (`InputStream`/`OutputStream`) handle I/O of raw 8-bit bytes, suitable for binary data like images, audio, video, and raw files.\n- Character Streams (`Reader`/`Writer`) handle 16-bit Unicode characters and handle character encoding/decoding automatically, making them specifically tailored for text data.\n\n---"
  },
  {
    "id": "W07_Q07",
    "week": 7,
    "num": 7,
    "category": "Theory Quiz MCQ",
    "question": "What is the primary purpose of thread synchronization in Java?",
    "options": [
      "To increase the execution speed of threads.",
      "To allow multiple threads to access shared resources simultaneously without restriction.",
      "To make threads wait indefinitely for each other.",
      "To prevent race conditions and ensure data consistency."
    ],
    "correctIndex": 3,
    "explanation": "- Thread synchronization controls the access of multiple threads to shared resources (such as mutable shared state/variables).\n- Without synchronization, concurrent interleaved modifications cause race conditions, dirty reads, and inconsistent data. Synchronization guarantees mutual exclusion and memory visibility.\n\n---"
  },
  {
    "id": "W07_Q08",
    "week": 7,
    "num": 8,
    "category": "Theory Quiz MCQ",
    "question": "Which stream does a Java application use to only READ data from a source (such as a file, array, socket)?",
    "options": [
      "InputStream",
      "OutputStream",
      "PrintStream",
      "BufferedOutputStream"
    ],
    "correctIndex": 0,
    "explanation": "- An `InputStream` represents an input stream of bytes, used strictly to read data from a source.\n- `OutputStream`, `PrintStream`, and `BufferedOutputStream` are all output streams used to write data to a destination.\n\n---"
  },
  {
    "id": "W07_Q09",
    "week": 7,
    "num": 9,
    "category": "Theory Quiz MCQ",
    "question": "Which class in Java is used to create a new directory?",
    "options": [
      "Directory",
      "Folder",
      "File",
      "PathDirectory"
    ],
    "correctIndex": 2,
    "explanation": "- In the `java.io` package, directory creation is performed using methods of the `File` class, such as `file.mkdir()` (creates single directory) and `file.mkdirs()` (creates directory including parent directories).\n- There are no standard Java classes named `Directory` or `Folder` in `java.io`.\n\n---"
  },
  {
    "id": "W07_Q10",
    "week": 7,
    "num": 10,
    "category": "Theory Quiz MCQ",
    "question": "What is the primary purpose of input streams in Java?",
    "options": [
      "To write data to a file.",
      "To read data from a file.",
      "To close a file.",
      "To delete a file."
    ],
    "correctIndex": 1,
    "explanation": "- The core purpose of any input stream in Java is to read data into the Java program from an external source (such as a file, network socket, or memory buffer).\n\n---"
  },
  {
    "id": "W08_Q01",
    "week": 8,
    "num": 1,
    "category": "Theory Quiz MCQ",
    "question": "Which of the following is TRUE about check boxes and radio buttons?",
    "options": [
      "Check boxes allow only one selection, while radio buttons allow multiple selections.",
      "Check boxes allow multiple selections, while radio buttons allow only one selection.",
      "Both allow only one selection.",
      "Both allow multiple selections."
    ],
    "correctIndex": 1,
    "explanation": "- In standard GUI programming (including Java AWT/Swing), `Checkbox` components are independent and allow the user to check (toggle) any number of options simultaneously.\n- Radio buttons (checkboxes grouped within a `CheckboxGroup` in AWT or `ButtonGroup` in Swing) are mutually exclusive, meaning selecting one automatically unselects all others in the group, permitting only one selection.\n\n---"
  },
  {
    "id": "W08_Q02",
    "week": 8,
    "num": 2,
    "category": "Theory Quiz MCQ",
    "question": "Which layout manager arranges components in a rectangular grid?",
    "options": [
      "FlowLayout",
      "CardLayout",
      "BorderLayout",
      "GridLayout"
    ],
    "correctIndex": 3,
    "explanation": "- `GridLayout` lays out a container's components in a rectangular grid consisting of equal-sized cells divided into rows and columns.\n- `FlowLayout` places components in a directional line. `BorderLayout` places components in 5 regions (North, South, East, West, Center). `CardLayout` treats each component as a card where only one is visible at a time.\n\n---"
  },
  {
    "id": "W08_Q03",
    "week": 8,
    "num": 3,
    "category": "Theory Quiz MCQ",
    "question": "Which method is used to set the title of a `Frame` in Java?",
    "options": [
      "`setTitle()`",
      "`setName()`",
      "`setText()`",
      "`setLabel()`"
    ],
    "correctIndex": 0,
    "explanation": "- In `java.awt.Frame` (and `javax.swing.JFrame`), the method `public void setTitle(String title)` is specifically provided to change the title text displayed in the frame's title bar.\n\n---"
  },
  {
    "id": "W08_Q04",
    "week": 8,
    "num": 4,
    "category": "Theory Quiz MCQ",
    "question": "Which method is used to request that a component be repainted in Java?",
    "options": [
      "`paint()`",
      "`repaint()`",
      "`update()`",
      "`draw()`"
    ],
    "correctIndex": 1,
    "explanation": "- In AWT/Swing component life-cycle, client code should never call `paint()` or `update()` directly.\n- Instead, programmers call `repaint()`, which asynchronously schedules a call to the component's `update()` (which clears the background) and subsequently calls `paint(Graphics g)` through the Event Dispatch Thread (EDT).\n\n---"
  },
  {
    "id": "W08_Q05",
    "week": 8,
    "num": 5,
    "category": "Theory Quiz MCQ",
    "question": "Which AWT component is used to display a scrolling list of items?",
    "options": [
      "Label",
      "List",
      "Button",
      "TextField"
    ],
    "correctIndex": 1,
    "explanation": "- `java.awt.List` presents the user with a scrolling list of text items. Users can choose either one item or multiple items depending on whether multiple-mode is enabled.\n\n---"
  },
  {
    "id": "W08_Q06",
    "week": 8,
    "num": 6,
    "category": "Theory Quiz MCQ",
    "question": "Which layout manager arranges components in a flow, placing them one after another?",
    "options": [
      "FlowLayout",
      "BorderLayout",
      "GridLayout",
      "CardLayout"
    ],
    "correctIndex": 0,
    "explanation": "- `FlowLayout` arranges components in a left-to-right flow, much like lines of text in a paragraph. When no more components fit on a line, it wraps them down to the next row. It is the default layout manager for `Panel` and `Applet`.\n\n---"
  },
  {
    "id": "W08_Q07",
    "week": 8,
    "num": 7,
    "category": "Theory Quiz MCQ",
    "question": "What does \"AWT\" stand for in Java?",
    "options": [
      "Abstract Widget Toolkit",
      "Advanced Window Toolkit",
      "Abstract Window Toolkit",
      "Advanced Widget Toolkit"
    ],
    "correctIndex": 2,
    "explanation": "- AWT stands for **Abstract Window Toolkit**. It is Java's original platform-dependent windowing, graphics, and user-interface widget toolkit.\n\n---"
  },
  {
    "id": "W08_Q08",
    "week": 8,
    "num": 8,
    "category": "Theory Quiz MCQ",
    "question": "Which AWT component is used to create a button in a GUI?",
    "options": [
      "Label",
      "Button",
      "TextField",
      "Checkbox"
    ],
    "correctIndex": 1,
    "explanation": "- In Java AWT, `java.awt.Button` produces a labeled button component that triggers an `ActionEvent` when clicked.\n\n---"
  },
  {
    "id": "W08_Q09",
    "week": 8,
    "num": 9,
    "category": "Theory Quiz MCQ",
    "question": "Which of the following correctly describes the GUI shown below?\n*(The GUI window displays a Frame titled with two input rows: \"First Name:\" next to a text box, and \"Last Name:\" next to a text box)*",
    "options": [
      "It contains two Labels and one TextField.",
      "It contains one Frame, two Labels, and two TextFields.",
      "It contains two Frames, two Labels, and two TextFields.",
      "It contains one Frame, two Buttons, and two TextFields."
    ],
    "correctIndex": 1,
    "explanation": "- The outer container is a single window window (`Frame`).\n- Inside are two text labels (`\"First Name:\"` and `\"Last Name:\"`) and two corresponding single-line input boxes (`TextField`).\n\n---"
  },
  {
    "id": "W08_Q10",
    "week": 8,
    "num": 10,
    "category": "Theory Quiz MCQ",
    "question": "Which of the following is TRUE about a check box in Java?",
    "options": [
      "A check box cannot be in the on or off state.",
      "Clicking a check box changes its state between on and off.",
      "A check box can be on and off at the same time.",
      "A check box cannot be grouped with other check boxes."
    ],
    "correctIndex": 1,
    "explanation": "- An AWT `Checkbox` is a graphical component that can be in either an \"on\" (`true`) or \"off\" (`false`) state. Clicking on a check box toggles its state from on to off or from off to on.\n\n---"
  },
  {
    "id": "W09_Q01",
    "week": 9,
    "num": 1,
    "category": "Theory Quiz MCQ",
    "question": "The container displays a number of components in a row, but adjusts according to the window size. Which of the following layout manager(s) is most naturally suited for the layout given above?",
    "options": [
      "`FlowLayout`",
      "`BorderLayout`",
      "`GridLayout`",
      "`BoxLayout`"
    ],
    "correctIndex": 0,
    "explanation": "- `FlowLayout` lays out components in a horizontal line, one after another. When the row is filled or the window is resized smaller, it naturally wraps the remaining components onto subsequent rows.\n\n---"
  },
  {
    "id": "W09_Q02",
    "week": 9,
    "num": 2,
    "category": "Theory Quiz MCQ",
    "question": "In Java, what is the primary purpose of a layout manager?",
    "options": [
      "To manage memory allocation",
      "To arrange GUI components within a container",
      "To handle exception handling",
      "To control database connections"
    ],
    "correctIndex": 1,
    "explanation": "- In Java GUI development (AWT and Swing), a layout manager is an interface/class responsible for automatically positioning and sizing components within a container according to specific layout rules and container dimensions.\n\n---"
  },
  {
    "id": "W09_Q03",
    "week": 9,
    "num": 3,
    "category": "Theory Quiz MCQ",
    "question": "Consider the following code:\n```java\nimport javax.swing.*;\nimport java.awt.event.*;\n\npublic class NPTEL {\n    public static void main(String[] args) {\n        JFrame frame = new JFrame(\"NPTEL Java Course\");\n        JButton button = new JButton(\"Click Me\");\n        button.setBounds(50, 100, 100, 40);\n        button.addActionListener(new ActionListener() {\n            public void actionPerformed(ActionEvent e) {\n                JOptionPane.showMessageDialog(null, \"Welcome to the course\");\n            }\n        });\n        frame.add(button);\n        frame.setSize(200, 200);\n        frame.setLayout(null);\n        frame.setVisible(true);\n    }\n}\n```\nWhat happens when the button in this Java code snippet is clicked?",
    "options": [
      "The program exits",
      "A message dialog with the text \"Welcome to the course\" is displayed",
      "The button label changes to \"Welcome to the course\"",
      "Nothing happens"
    ],
    "correctIndex": 1,
    "explanation": "- The button has an `ActionListener` registered with an anonymous inner class implementing `actionPerformed()`.\n- Inside `actionPerformed()`, `JOptionPane.showMessageDialog(null, \"Welcome to the course\");` is executed, which pops up a modal standard dialog displaying the string `\"Welcome to the course\"`.\n\n---"
  },
  {
    "id": "W09_Q04",
    "week": 9,
    "num": 4,
    "category": "Theory Quiz MCQ",
    "question": "Consider the following code:\n```java\nimport javax.swing.*;\n\npublic class NPTEL extends JFrame {\n    public NPTEL() {\n        JButton b = new JButton(\"Programming in Java\");\n        add(b);\n        setSize(300, 200);\n        setDefaultCloseOperation(EXIT_ON_CLOSE);\n        setVisible(true);\n    }\n    public static void main(String[] args) {\n        new NPTEL();\n    }\n}\n```\nWhat is the output of the above code?",
    "options": [
      "Creates a JFrame with a JButton labeled \"Programming in Java\"",
      "Compiles with errors",
      "Displays a message dialog",
      "Creates a Frame with a Button labeled \"Programming in Java\""
    ],
    "correctIndex": 0,
    "explanation": "- The class `NPTEL` extends `javax.swing.JFrame`.\n- In the constructor, `new JButton(\"Programming in Java\")` is created and added to the frame. The window size is set to 300x200 and set visible. Instantiating `new NPTEL()` displays this Swing `JFrame` containing the `JButton`.\n\n---"
  },
  {
    "id": "W09_Q05",
    "week": 9,
    "num": 5,
    "category": "Theory Quiz MCQ",
    "question": "Consider the following code:\n```java\nimport javax.swing.*;\n\npublic class FrameExample {\n    public static void main(String[] args) {\n        JFrame frame = new JFrame(\"Demo Frame\");\n        JButton button = new JButton(\"Click Me\");\n        // INSERT CODE HERE\n        frame.setSize(300, 200);\n        frame.setVisible(true);\n    }\n}\n```\nWhat should replace `// INSERT CODE HERE` to create a `JFrame` with a `JButton` labeled \"Click Me\"?",
    "options": [
      "`frame.add(button);`",
      "`frame.insert(button);`",
      "`frame.append(button);`",
      "`frame.push(button);`"
    ],
    "correctIndex": 0,
    "explanation": "- In Java containers (`Container`, `JFrame`), components are added to the container using the `add(Component comp)` method. There are no methods named `insert`, `append`, or `push` on `JFrame`.\n\n---"
  },
  {
    "id": "W09_Q06",
    "week": 9,
    "num": 6,
    "category": "Theory Quiz MCQ",
    "question": "Identify and correct the error in the following program:\n```java\nimport javax.swing.*;\nimport java.awt.*;\n\npublic class PanelExample {\n    public static void main(String[] args) {\n        JFrame frame = new JFrame(\"Panel Example\");\n        JPanel panel = new JPanel();\n        JButton button = new JButton(\"Submit\");\n        panel.setFlowLayout(); // ERROR\n        panel.add(button);\n        frame.add(panel);\n        frame.setSize(300, 200);\n        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n        frame.setVisible(true);\n    }\n}\n```\nWhat should the erroneous line `panel.setFlowLayout();` be replaced with?",
    "options": [
      "`panel.setLayout(new);`",
      "`panel.addFlowLayout();`",
      "`panel.appendLayout(new FlowLayout());`",
      "`panel.setLayout(new FlowLayout());`"
    ],
    "correctIndex": 3,
    "explanation": "- Containers set their layout manager by calling `setLayout(LayoutManager mgr)`.\n- To set a FlowLayout, an instance of `FlowLayout` must be passed: `panel.setLayout(new FlowLayout());`. There is no `setFlowLayout()` method on `JPanel`.\n\n---"
  },
  {
    "id": "W09_Q07",
    "week": 9,
    "num": 7,
    "category": "Theory Quiz MCQ",
    "question": "Which method is used to remove a component from a container in AWT?",
    "options": [
      "`remove()`",
      "`deleteComponent()`",
      "`removeComponent()`",
      "`destroy()`"
    ],
    "correctIndex": 0,
    "explanation": "- In `java.awt.Container`, the method to remove an individual component from the container is `public void remove(Component comp)` or `public void remove(int index)`. To remove all components, `removeAll()` is used.\n\n---"
  },
  {
    "id": "W09_Q08",
    "week": 9,
    "num": 8,
    "category": "Theory Quiz MCQ",
    "question": "Which method is used to handle mouse click events in Java Swing?",
    "options": [
      "`mouseClicked()`",
      "`keyPressed()`",
      "`actionPerformed()`",
      "`componentShown()`"
    ],
    "correctIndex": 0,
    "explanation": "- The `MouseListener` interface defines methods for receiving mouse events: `mouseClicked(MouseEvent e)`, `mousePressed()`, `mouseReleased()`, `mouseEntered()`, and `mouseExited()`.\n- `keyPressed()` belongs to `KeyListener`, and `actionPerformed()` belongs to `ActionListener`.\n\n---"
  },
  {
    "id": "W09_Q09",
    "week": 9,
    "num": 9,
    "category": "Theory Quiz MCQ",
    "question": "Which Swing component is best suited for displaying a drop-down list of selectable options?",
    "options": [
      "`JButton`",
      "`JComboBox`",
      "`JTextField`",
      "`JPanel`"
    ],
    "correctIndex": 1,
    "explanation": "- `javax.swing.JComboBox` is a component that combines a button or editable field and a drop-down list, allowing the user to select one value from a list of options.\n\n---"
  },
  {
    "id": "W09_Q10",
    "week": 9,
    "num": 10,
    "category": "Theory Quiz MCQ",
    "question": "Which of the following functions is used to specify the layout of a container?",
    "options": [
      "`UseLayout()`",
      "`setLayout()`",
      "`layout()`",
      "`DesignLayout()`"
    ],
    "correctIndex": 1,
    "explanation": "- `setLayout(LayoutManager manager)` is the standard method defined in `java.awt.Container` (inherited by all AWT and Swing containers) to set the layout manager.\n\n---"
  },
  {
    "id": "W10_Q01",
    "week": 10,
    "num": 1,
    "category": "Theory Quiz MCQ",
    "question": "Which Swing component is used to display a window?",
    "options": [
      "`JFrame`",
      "`JButton`",
      "`JLabel`",
      "`JTextField`"
    ],
    "correctIndex": 0,
    "explanation": "- In Java Swing, `javax.swing.JFrame` is the top-level container used to display a main GUI window on the screen with title, border, minimize, maximize, and close controls.\n\n---"
  },
  {
    "id": "W10_Q02",
    "week": 10,
    "num": 2,
    "category": "Theory Quiz MCQ",
    "question": "Which Swing component is used to enter a single line of text?",
    "options": [
      "`JButton`",
      "`JLabel`",
      "`JTextField`",
      "`JPanel`"
    ],
    "correctIndex": 2,
    "explanation": "- `javax.swing.JTextField` allows the editing of a single line of text. For multi-line text input, `JTextArea` or `JEditorPane` is used.\n\n---"
  },
  {
    "id": "W10_Q03",
    "week": 10,
    "num": 3,
    "category": "Theory Quiz MCQ",
    "question": "Which Swing component is commonly used to display non-editable text?",
    "options": [
      "`JLabel`",
      "`JButton`",
      "`JFrame`",
      "`JTextField`"
    ],
    "correctIndex": 0,
    "explanation": "- `javax.swing.JLabel` is a display area for a short text string or an image (or both) that is read-only / non-editable by the user.\n\n---"
  },
  {
    "id": "W10_Q04",
    "week": 10,
    "num": 4,
    "category": "Theory Quiz MCQ",
    "question": "Which JDBC interface is used to execute SQL statements?",
    "options": [
      "`ResultSet`",
      "`Statement`",
      "`Connection`",
      "`DriverManager`"
    ],
    "correctIndex": 1,
    "explanation": "- The `java.sql.Statement` interface (and its subinterfaces `PreparedStatement` and `CallableStatement`) is used to execute static SQL statements and return the results they produce.\n\n---"
  },
  {
    "id": "W10_Q05",
    "week": 10,
    "num": 5,
    "category": "Theory Quiz MCQ",
    "question": "Which JDBC object contains the result of a SELECT query?",
    "options": [
      "`Connection`",
      "`Statement`",
      "`ResultSet`",
      "`DriverManager`"
    ],
    "correctIndex": 2,
    "explanation": "- When an SQL `SELECT` query is executed using `executeQuery()`, it returns a `java.sql.ResultSet` table of data representing a database result set, which maintains a cursor pointing to its current row of data.\n\n---"
  },
  {
    "id": "W10_Q06",
    "week": 10,
    "num": 6,
    "category": "Theory Quiz MCQ",
    "question": "Which JDBC class is used to establish a database connection?",
    "options": [
      "`DriverManager`",
      "`ResultSet`",
      "`Statement`",
      "`Scanner`"
    ],
    "correctIndex": 0,
    "explanation": "- The `java.sql.DriverManager` class is the basic service for managing a set of JDBC drivers. Its static method `DriverManager.getConnection(url, user, password)` establishes and returns an active `Connection` object to the target database.\n\n---"
  },
  {
    "id": "W10_Q07",
    "week": 10,
    "num": 7,
    "category": "Theory Quiz MCQ",
    "question": "Which Java class is used to connect a client to a server?",
    "options": [
      "`ServerSocket`",
      "`Socket`",
      "`URL`",
      "`NetworkInterface`"
    ],
    "correctIndex": 1,
    "explanation": "- In Java networking (`java.net`), the `Socket` class implements client sockets (endpoints for communication between two machines), allowing a client to connect to a server's host and port.\n\n---"
  },
  {
    "id": "W10_Q08",
    "week": 10,
    "num": 8,
    "category": "Theory Quiz MCQ",
    "question": "Which class is used by a server to listen for client connections?",
    "options": [
      "`Socket`",
      "`URL`",
      "`ServerSocket`",
      "`NetworkInterface`"
    ],
    "correctIndex": 2,
    "explanation": "- In Java networking, `java.net.ServerSocket` implements a server socket. It binds to a specific port and waits for incoming requests over the network via its blocking `accept()` method, which returns a `Socket` when a client connects.\n\n---"
  },
  {
    "id": "W10_Q09",
    "week": 10,
    "num": 9,
    "category": "Theory Quiz MCQ",
    "question": "Which protocol is used in the URL `https://nptel.ac.in`?",
    "options": [
      "FTP",
      "HTTP",
      "HTTPS",
      "SMTP"
    ],
    "correctIndex": 2,
    "explanation": "- The scheme component at the beginning of the URL (`https://`) specifies the Hypertext Transfer Protocol Secure (HTTPS), which encrypts communications over TLS/SSL.\n\n---"
  },
  {
    "id": "W10_Q10",
    "week": 10,
    "num": 10,
    "category": "Theory Quiz MCQ",
    "question": "Which method of `NetworkInterface` is used to check whether a network interface is up?",
    "options": [
      "`isActive()`",
      "`isUp()`",
      "`isRunning()`",
      "`isConnected()`"
    ],
    "correctIndex": 1,
    "explanation": "- In `java.net.NetworkInterface`, the method `public boolean isUp() throws SocketException` returns whether a network interface is up and running.\n\n---"
  },
  {
    "id": "W11_Q01",
    "week": 11,
    "num": 1,
    "category": "Theory Quiz MCQ",
    "question": "How do you establish a connection to a database using JDBC?",
    "options": [
      "By creating an instance of the Connection interface",
      "By using the `DriverManager.getConnection()` method",
      "By implementing the Connection interface",
      "By extending the Connection class"
    ],
    "correctIndex": 1,
    "explanation": "- `java.sql.Connection` is an interface, so it cannot be directly instantiated using `new`.\n- Database connections are created and returned by the factory method `DriverManager.getConnection(url, user, password)`, which locates an appropriate registered driver for the specified URL.\n\n---"
  },
  {
    "id": "W11_Q02",
    "week": 11,
    "num": 2,
    "category": "Theory Quiz MCQ",
    "question": "Which method executes a simple query and returns a single `ResultSet` object?",
    "options": [
      "`executeQuery()`",
      "`executeUpdate()`",
      "`execute()`",
      "`run()`"
    ],
    "correctIndex": 0,
    "explanation": "- `Statement.executeQuery(String sql)` is designed specifically for queries that produce a single `ResultSet` object (typically SQL `SELECT` statements).\n- `executeUpdate()` is used for `INSERT`, `UPDATE`, `DELETE`, or DDL statements and returns an integer count of affected rows. `execute()` is used when a statement may return multiple result sets or update counts.\n\n---"
  },
  {
    "id": "W11_Q03",
    "week": 11,
    "num": 3,
    "category": "Theory Quiz MCQ",
    "question": "Which of the following ensures that the correct driver is used to access each data source?",
    "options": [
      "`java.sql.Manager`",
      "`java.sql.DriverManager`",
      "`java.sql.Statement`",
      "`java.sql.DriverSession`"
    ],
    "correctIndex": 1,
    "explanation": "- `DriverManager` maintains a list of `Driver` classes that have registered themselves. When `getConnection()` is called, it queries each registered driver to find the one that understands the given sub-protocol URL.\n\n---"
  },
  {
    "id": "W11_Q04",
    "week": 11,
    "num": 4,
    "category": "Theory Quiz MCQ",
    "question": "What is the purpose of the `ResultSet` interface in JDBC?",
    "options": [
      "To store the result of a query",
      "To execute SQL queries",
      "To manage database connections",
      "To update data in the database"
    ],
    "correctIndex": 0,
    "explanation": "- A `ResultSet` object represents a tabular database result set generated by executing a query. It maintains a cursor pointing to rows of retrieved data.\n\n---"
  },
  {
    "id": "W11_Q05",
    "week": 11,
    "num": 5,
    "category": "Theory Quiz MCQ",
    "question": "What does `setAutoCommit(false)` do?",
    "options": [
      "commits transaction after each query",
      "explicitly commits transaction",
      "does not commit transaction automatically after each query",
      "never commits transaction"
    ],
    "correctIndex": 2,
    "explanation": "- By default, newly opened JDBC connections are in auto-commit mode (`autoCommit = true`), where each individual SQL statement is treated as a separate transaction committed immediately upon completion.\n- Setting `con.setAutoCommit(false)` disables auto-commit, allowing multiple statements to be grouped into a single transaction that must be explicitly committed via `con.commit()` or rolled back via `con.rollback()`.\n\n---"
  },
  {
    "id": "W11_Q06",
    "week": 11,
    "num": 6,
    "category": "Theory Quiz MCQ",
    "question": "The following is a statement in Java using JDBC:\n```java\nConnection con = DriverManager.getConnection(\n    \"jdbc:mysql://localhost:3306/nptel\", \"joy\", \"java\"\n);\n```\nWhich of the following statements is FALSE?",
    "options": [
      "3306 is the default MySQL port.",
      "Database name is 'nptel'",
      "The database server is hosted on IP 127.0.0.1",
      "Username is 'java' and the password is 'joy'"
    ],
    "correctIndex": 3,
    "explanation": "- The signature of `DriverManager.getConnection` is `(url, user, password)`.\n- Here, the 2nd argument is `\"joy\"` (the username) and the 3rd argument is `\"java\"` (the password). Therefore, statement d is FALSE (it swaps username and password).\n\n---"
  },
  {
    "id": "W11_Q07",
    "week": 11,
    "num": 7,
    "category": "Theory Quiz MCQ",
    "question": "What is the correct order to close database resources?",
    "options": [
      "Connection then Statement then ResultSet",
      "ResultSet then Statement then Connection",
      "Statement then Connection then ResultSet",
      "Statement then ResultSet then Connection"
    ],
    "correctIndex": 1,
    "explanation": "- Database resources should always be closed in the reverse order of their opening/acquisition: dependent objects first (`ResultSet`), followed by the command object (`Statement`), and finally the connection itself (`Connection`).\n\n---"
  },
  {
    "id": "W11_Q08",
    "week": 11,
    "num": 8,
    "category": "Theory Quiz MCQ",
    "question": "What is the full form of JDBC?",
    "options": [
      "Java Database Connectivity",
      "Java Data Code",
      "Java Data Communication",
      "Java Development Connectivity"
    ],
    "correctIndex": 0,
    "explanation": "- JDBC stands for **Java Database Connectivity**. It is a Java API that manages connecting to databases, issuing queries and commands, and handling result sets.\n\n---"
  },
  {
    "id": "W11_Q09",
    "week": 11,
    "num": 9,
    "category": "Theory Quiz MCQ",
    "question": "Fill in the missing code to establish a connection to a MySQL database:\n```java\nimport java.sql.*;\n\npublic class JDBCExample {\n    public static void main(String[] args) {\n        try {\n            Class.forName(\"com.mysql.cj.jdbc.Driver\");\n            Connection connection = // INSERT CODE HERE;\n            System.out.println(\"Connected to the database.\");\n            connection.close();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}\n```\nWhat should replace `// INSERT CODE HERE`?",
    "options": [
      "`DriverManager.connect(\"mysql://localhost:mydb\", \"user\", \"password\");`",
      "`DriverManager.getConnection(\"jdbc:mysql://localhost:3306/mydb\", \"user\", \"password\");`",
      "`Connection.get(\"jdbc:mysql://localhost:3306/mydb\", \"user\", \"password\");`",
      "`Driver.connect(\"jdbc:mysql://localhost:mydb\", \"user\", \"password\");`"
    ],
    "correctIndex": 1,
    "explanation": "- The standard static method to obtain a `Connection` is `DriverManager.getConnection()`.\n- The MySQL JDBC URL must start with `jdbc:mysql://` followed by `host:port/database`.\n\n---"
  },
  {
    "id": "W11_Q10",
    "week": 11,
    "num": 10,
    "category": "Theory Quiz MCQ",
    "question": "What is the purpose of the `DriverManager` class in JDBC?",
    "options": [
      "To manage database connections.",
      "To execute SQL queries.",
      "To fetch data from a database.",
      "To represent a database record."
    ],
    "correctIndex": 0,
    "explanation": "- `DriverManager` is the factory and management layer in `java.sql` responsible for tracking registered drivers and establishing connections to databases.\n\n---"
  },
  {
    "id": "W12_Q01",
    "week": 12,
    "num": 1,
    "category": "Theory Quiz MCQ",
    "question": "Which method returns the number of characters in a Java String?",
    "options": [
      "`size()`",
      "`length()`",
      "`count()`",
      "`getSize()`"
    ],
    "correctIndex": 1,
    "explanation": "- In Java, `String.length()` is a method that returns the number of 16-bit Unicode characters (`char` units) contained in the string.\n- In contrast, arrays use the public field `.length`, and Collections use `.size()`.\n\n---"
  },
  {
    "id": "W12_Q02",
    "week": 12,
    "num": 2,
    "category": "Theory Quiz MCQ",
    "question": "Which method is used to get a character at a specified position in a String?",
    "options": [
      "`charAt()`",
      "`getChar()`",
      "`characterAt()`",
      "`getAt()`"
    ],
    "correctIndex": 0,
    "explanation": "- In `java.lang.String`, the method `public char charAt(int index)` returns the character value at the specified zero-based index.\n\n---"
  },
  {
    "id": "W12_Q03",
    "week": 12,
    "num": 3,
    "category": "Theory Quiz MCQ",
    "question": "Which keyword is used to create a subclass in Java?",
    "options": [
      "`implements`",
      "`inherits`",
      "`extends`",
      "`super`"
    ],
    "correctIndex": 2,
    "explanation": "- In Java, class inheritance is declared using the `extends` keyword (e.g., `class Dog extends Animal`).\n- `implements` is used when a class realizes an `interface`.\n\n---"
  },
  {
    "id": "W12_Q04",
    "week": 12,
    "num": 4,
    "category": "Theory Quiz MCQ",
    "question": "Which block is executed whether an exception occurs or not?",
    "options": [
      "`try`",
      "`catch`",
      "`throw`",
      "`finally`"
    ],
    "correctIndex": 3,
    "explanation": "- The `finally` block in Java always executes when the `try` block exits, whether the `try` block finishes normally or terminates with an exception (handled or unhandled). It is primarily used for cleanup tasks like closing resources.\n\n---"
  },
  {
    "id": "W12_Q05",
    "week": 12,
    "num": 5,
    "category": "Theory Quiz MCQ",
    "question": "Which keyword is used to explicitly throw an exception in Java?",
    "options": [
      "`throws`",
      "`throw`",
      "`exception`",
      "`catch`"
    ],
    "correctIndex": 1,
    "explanation": "- The `throw` keyword is used inside a method or block of code to explicitly throw an instance of an exception (e.g., `throw new IllegalArgumentException(\"Invalid input\");`).\n- In contrast, `throws` is part of a method signature declaring checked exceptions that may propagate out of the method.\n\n---"
  },
  {
    "id": "W12_Q06",
    "week": 12,
    "num": 6,
    "category": "Theory Quiz MCQ",
    "question": "Which keyword is used to indicate that a method may throw an exception?",
    "options": [
      "`throw`",
      "`throws`",
      "`try`",
      "`finally`"
    ],
    "correctIndex": 1,
    "explanation": "- The `throws` keyword is placed in a method header/declaration to list the types of checked exceptions the method might throw to its caller (e.g., `void readFile() throws IOException`).\n\n---"
  },
  {
    "id": "W12_Q07",
    "week": 12,
    "num": 7,
    "category": "Theory Quiz MCQ",
    "question": "Which syntax is used to declare an array variable in Java?",
    "options": [
      "`array`",
      "`newarray`",
      "`[]`",
      "`arrayof`"
    ],
    "correctIndex": 2,
    "explanation": "- Square brackets `[]` are used in Java to designate array types and variable declarations (e.g., `int[] arr` or `int arr[]`).\n\n---"
  },
  {
    "id": "W12_Q08",
    "week": 12,
    "num": 8,
    "category": "Theory Quiz MCQ",
    "question": "Which layout manager arranges components in five regions?",
    "options": [
      "`FlowLayout`",
      "`BorderLayout`",
      "`GridLayout`",
      "`BoxLayout`"
    ],
    "correctIndex": 1,
    "explanation": "- `BorderLayout` divides a container into 5 geographic areas: `NORTH`, `SOUTH`, `EAST`, `WEST`, and `CENTER`. Each area can contain at most one component.\n\n---"
  },
  {
    "id": "W12_Q09",
    "week": 12,
    "num": 9,
    "category": "Theory Quiz MCQ",
    "question": "Which method is used to register an `ActionListener` with a `JButton`?",
    "options": [
      "`addActionListener()`",
      "`addButtonListener()`",
      "`setAction()`",
      "`registerAction()`"
    ],
    "correctIndex": 0,
    "explanation": "- In Java AWT/Swing (`Button` and `AbstractButton`/`JButton`), event listeners for button click actions are registered via `addActionListener(ActionListener l)`.\n\n---"
  },
  {
    "id": "W12_Q10",
    "week": 12,
    "num": 10,
    "category": "Theory Quiz MCQ",
    "question": "Which method of `NetworkInterface` is used to check whether a network interface is up?",
    "options": [
      "`isActive()`",
      "`isUp()`",
      "`isRunning()`",
      "`isConnected()`"
    ],
    "correctIndex": 1,
    "explanation": "- In Java's `java.net.NetworkInterface`, the boolean method `isUp()` checks whether the network interface is active and running.\n\n---"
  }
];

window.PROG_DATA = [
  {
    "id": "W01_P01",
    "week": 1,
    "num": 1,
    "title": "Check Even or Odd",
    "problem": "Write a Java program to check if a given integer is even or odd. Print 'Odd' if odd and 'Even' if even.",
    "testCase": "Input: 3\nExpected Output: Odd",
    "templateCode": "import java.util.Scanner;\n\npublic class W01_P1 {\n    public static void main(String[] args) {\n        Scanner in = new Scanner(System.in);\n        int number = in.nextInt();\n\n        // Feel free to delete these comments or simply start typing your code below:\n        /* >>> [PUT YOUR CODE BELOW] <<< */\n\n        in.close();\n    }\n}",
    "studentCode": "if (number % 2 == 0) {\n    System.out.println(\"Even\");\n} else {\n    System.out.println(\"Odd\");\n}",
    "question": "Which code snippet should replace /* >>> [PUT YOUR CODE BELOW] <<< */ to correctly check whether number is even or odd?",
    "options": [
      "if (number % 2 == 0) {\n    System.out.print(\"Even\");\n} else {\n    System.out.print(\"Odd\");\n}",
      "if (number / 2 == 0) {\n    System.out.print(\"Even\");\n} else {\n    System.out.print(\"Odd\");\n}",
      "if (number % 2 != 0) {\n    System.out.print(\"Even\");\n} else {\n    System.out.print(\"Odd\");\n}",
      "if (number / 2 == 1) {\n    System.out.print(\"Even\");\n} else {\n    System.out.print(\"Odd\");\n}"
    ],
    "correctIndex": 0,
    "explanation": "In Java, the modulo operator `%` calculates the remainder of division. A number is even if `number % 2 == 0`. Using `/` computes integer division, not remainder.",
    "fullCode": "import java.util.Scanner;\n\npublic class W01_P1 {\n    public static void main(String[] args) {\n        Scanner in = new Scanner(System.in);\n        int number = in.nextInt();\n        if (number % 2 == 0) {\n            System.out.print(\"Even\");\n        } else {\n            System.out.print(\"Odd\");\n        }\n        in.close();\n    }\n}"
  },
  {
    "id": "W01_P02",
    "week": 1,
    "num": 2,
    "title": "Area and Perimeter of a Rectangle",
    "problem": "Write a Java program to compute the perimeter and area of a rectangle given double values for width and height.",
    "testCase": "Input: 2.5 6.8\nExpected Output:\nPerimeter is 2*(6.8 + 2.5) = 18.60\nArea is 2.5 * 6.8 = 17.00",
    "templateCode": "import java.util.Scanner;\n\npublic class W01_P2 {\n    public static void main(String[] strings) {\n        double width;\n        double height;\n        Scanner in = new Scanner(System.in);\n        width = in.nextDouble();\n        height = in.nextDouble();\n\n        /* >>> [PUT YOUR CODE BELOW] <<< */\n\n        System.out.printf(\"Perimeter is 2*(%.1f + %.1f) = %.2f\\n\", height, width, perimeter);\n        System.out.printf(\"Area is %.1f * %.1f = %.2f\", width, height, area);\n    }\n}",
    "studentCode": "double perimeter = 2 * (height + width);\ndouble area = width * height;",
    "question": "Which code snippet correctly declares and calculates both perimeter and area of the rectangle?",
    "options": [
      "double perimeter = 2 * (height + width);\ndouble area = width * height;",
      "double perimeter = height + width;\ndouble area = 2 * (width * height);",
      "double perimeter = 2 * height * width;\ndouble area = width + height;",
      "int perimeter = (int)(2 * (height + width));\nint area = (int)(width * height);"
    ],
    "correctIndex": 0,
    "explanation": "The formula for perimeter is $2 \\times (\\text{height} + \\text{width})$ and area is $\\text{width} \\times \\text{height}$. Variables must be `double` to match the format strings `%.2f`.",
    "fullCode": "import java.util.Scanner;\n\npublic class W01_P2 {\n    public static void main(String[] strings) {\n        double width;\n        double height;\n        Scanner in = new Scanner(System.in);\n        width = in.nextDouble();\n        height = in.nextDouble();\n        double perimeter = 2 * (height + width);\n        double area = width * height;\n        System.out.printf(\"Perimeter is 2*(%.1f + %.1f) = %.2f\\n\", height, width, perimeter);\n        System.out.printf(\"Area is %.1f * %.1f = %.2f\", width, height, area);\n    }\n}"
  },
  {
    "id": "W01_P03",
    "week": 1,
    "num": 3,
    "title": "Volume of a Cylinder",
    "problem": "Calculate the volume of a cylinder given radius and height using the formula V = Math.PI * r^2 * h.",
    "testCase": "Input: 1 1\nExpected Output: Volume is: 3.14",
    "templateCode": "import java.util.Scanner;\n\npublic class W01_P3 {\n    public static void main(String[] args) {\n        Scanner in = new Scanner(System.in);\n        double radius = in.nextDouble();\n        double height = in.nextDouble();\n\n        /* >>> [PUT YOUR CODE BELOW] <<< */\n\n        System.out.printf(\"Volume is: %.2f\", volume);\n        in.close();\n    }\n}",
    "studentCode": "double volume = Math.PI * radius * radius * height;",
    "question": "Which statement correctly computes the volume using Java's Math.PI constant?",
    "options": [
      "double volume = Math.PI * radius * radius * height;",
      "double volume = Math.PI * (radius ^ 2) * height;",
      "double volume = 3.14 * radius * height;",
      "double volume = 2 * Math.PI * radius * height;"
    ],
    "correctIndex": 0,
    "explanation": "`Math.PI` holds the constant $\\pi$. In Java, `^` is bitwise XOR, not exponentiation. To square the radius, use `radius * radius`.",
    "fullCode": "import java.util.Scanner;\n\npublic class W01_P3 {\n    public static void main(String[] args) {\n        Scanner in = new Scanner(System.in);\n        double radius = in.nextDouble();\n        double height = in.nextDouble();\n        double volume = Math.PI * radius * radius * height;\n        System.out.printf(\"Volume is: %.2f\", volume);\n        in.close();\n    }\n}"
  },
  {
    "id": "W01_P04",
    "week": 1,
    "num": 4,
    "title": "Multiplication Table up to 4",
    "problem": "Write a Java program to print the multiplication table of a given number up to 4.",
    "testCase": "Input: 10\nExpected Output:\n10 x 1 = 10\n10 x 2 = 20\n10 x 3 = 30\n10 x 4 = 40",
    "templateCode": "import java.util.Scanner;\n\npublic class W01_P4 {\n    public static void main(String[] args) {\n        Scanner in = new Scanner(System.in);\n        int number = in.nextInt();\n\n        /* >>> [PUT YOUR CODE BELOW] <<< */\n\n        in.close();\n    }\n}",
    "studentCode": "for (int i = 1; i < 5; i++) {\n    System.out.printf(\"%d x %d = %d\\n\", number, i, number * i);\n}",
    "question": "Which for-loop correctly outputs the 4 multiplication lines with exact formatting?",
    "options": [
      "for (int i = 1; i < 5; i++) {\n    System.out.printf(\"%d x %d = %d\\n\", number, i, number * i);\n}",
      "for (int i = 0; i <= 4; i++) {\n    System.out.printf(\"%d x %d = %d\\n\", number, i, number * i);\n}",
      "for (int i = 1; i <= 5; i++) {\n    System.out.printf(\"%d x %d = %d\\n\", number, i, number * i);\n}",
      "for (int i = 1; i < 4; i++) {\n    System.out.printf(\"%d x %d = %d\\n\", number, i, number * i);\n}"
    ],
    "correctIndex": 0,
    "explanation": "Loop bounds `int i = 1; i < 5; i++` run for `i = 1, 2, 3, 4` which produces exactly four lines.",
    "fullCode": "import java.util.Scanner;\n\npublic class W01_P4 {\n    public static void main(String[] args) {\n        Scanner in = new Scanner(System.in);\n        int number = in.nextInt();\n        for (int i = 1; i < 5; i++) {\n            System.out.printf(\"%d x %d = %d\\n\", number, i, number * i);\n        }\n        in.close();\n    }\n}"
  },
  {
    "id": "W01_P05",
    "week": 1,
    "num": 5,
    "title": "Quotient and Remainder",
    "problem": "Complete the code that reads two integers x and y and computes their quotient and remainder.",
    "testCase": "Input: -756 8\nExpected Output:\nThe Quotient is = -94\nThe Remainder is = -4",
    "templateCode": "import java.util.Scanner;\n\npublic class W01_P5 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int x = sc.nextInt();\n        int y = sc.nextInt();\n\n        /* >>> [PUT YOUR CODE BELOW] <<< */\n\n        System.out.println(\"The Quotient is = \" + quotient);\n        System.out.println(\"The Remainder is = \" + remainder);\n        sc.close();\n    }\n}",
    "studentCode": "int quotient = x / y;\nint remainder = x % y;",
    "question": "Which code snippet correctly computes quotient and remainder using Java operators?",
    "options": [
      "int quotient = x / y;\nint remainder = x % y;",
      "int quotient = x % y;\nint remainder = x / y;",
      "double quotient = x \\ y;\ndouble remainder = x mod y;",
      "int quotient = (int)(x * y);\nint remainder = (int)(x - y);"
    ],
    "correctIndex": 0,
    "explanation": "In Java, `/` produces integer division (quotient) and `%` computes remainder (`-756 % 8 = -4`).",
    "fullCode": "import java.util.Scanner;\n\npublic class W01_P5 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int x = sc.nextInt();\n        int y = sc.nextInt();\n        int quotient = x / y;\n        int remainder = x % y;\n        System.out.println(\"The Quotient is = \" + quotient);\n        System.out.println(\"The Remainder is = \" + remainder);\n        sc.close();\n    }\n}"
  },
  {
    "id": "W02_P01",
    "week": 2,
    "num": 1,
    "title": "Rectangle Area",
    "problem": "Write a Java program to calculate the area of a rectangle: Area = length * width.",
    "testCase": "Input: 7 3\nExpected Output: Area is: 21",
    "templateCode": "import java.util.Scanner;\n\npublic class W02_P1 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int length = sc.nextInt();\n        int width = sc.nextInt();\n\n        /* >>> [PUT YOUR CODE BELOW] <<< */\n\n        sc.close();\n    }\n}",
    "studentCode": "int area = length * width;\nSystem.out.println(\"Area is: \" + area);",
    "question": "Which code snippet correctly computes and prints the area?",
    "options": [
      "int area = length * width;\nSystem.out.println(\"Area is: \" + area);",
      "int area = length + width;\nSystem.out.println(\"Area is: \" + area);",
      "int area = 2 * (length + width);\nSystem.out.println(\"Area is: \" + area);",
      "double area = length / width;\nSystem.out.println(\"Area is: \" + area);"
    ],
    "correctIndex": 0,
    "explanation": "Area of rectangle is product of length and width: `length * width`.",
    "fullCode": "import java.util.Scanner;\n\npublic class W02_P1 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int length = sc.nextInt();\n        int width = sc.nextInt();\n        int area = length * width;\n        System.out.println(\"Area is: \" + area);\n        sc.close();\n    }\n}"
  },
  {
    "id": "W02_P02",
    "week": 2,
    "num": 2,
    "title": "Rectangle Perimeter",
    "problem": "Write a Java program to calculate the perimeter of a rectangle: Perimeter = 2 * (length + width).",
    "testCase": "Input: 3 5\nExpected Output: Perimeter is: 16",
    "templateCode": "import java.util.Scanner;\n\npublic class W02_P2 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int length = sc.nextInt();\n        int width = sc.nextInt();\n\n        /* >>> [PUT YOUR CODE BELOW] <<< */\n\n        sc.close();\n    }\n}",
    "studentCode": "int perimeter = 2 * (length + width);\nSystem.out.println(\"Perimeter is: \" + perimeter);",
    "question": "Which code snippet correctly calculates and prints the perimeter of the rectangle?",
    "options": [
      "int perimeter = 2 * (length + width);\nSystem.out.println(\"Perimeter is: \" + perimeter);",
      "int perimeter = 2 * length + width;\nSystem.out.println(\"Perimeter is: \" + perimeter);",
      "int perimeter = length * width;\nSystem.out.println(\"Perimeter is: \" + perimeter);",
      "int perimeter = (length + width) / 2;\nSystem.out.println(\"Perimeter is: \" + perimeter);"
    ],
    "correctIndex": 0,
    "explanation": "Perimeter formula is $2 \\times (\\text{length} + \\text{width})$.",
    "fullCode": "import java.util.Scanner;\n\npublic class W02_P2 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int length = sc.nextInt();\n        int width = sc.nextInt();\n        int perimeter = 2 * (length + width);\n        System.out.println(\"Perimeter is: \" + perimeter);\n        sc.close();\n    }\n}"
  },
  {
    "id": "W02_P03",
    "week": 2,
    "num": 3,
    "title": "Finding the Maximum Element in an Array",
    "problem": "Read n numbers from user, store them in an array, find the largest number and print 'Maximum is: <max>'.",
    "testCase": "Input: 4\n100 20 300 50\nExpected Output: Maximum is: 300",
    "templateCode": "import java.util.Scanner;\n\npublic class W02_P3 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n\n        /* >>> [PUT YOUR CODE BELOW] <<< */\n\n        sc.close();\n    }\n}",
    "studentCode": "int max = arr[0];\nfor (int i = 1; i < n; i++) {\n    if (arr[i] > max) {\n        max = arr[i];\n    }\n}\nSystem.out.println(\"Maximum is: \" + max);",
    "question": "Which code snippet correctly iterates through the array to determine the maximum element?",
    "options": [
      "int max = arr[0];\nfor (int i = 1; i < n; i++) {\n    if (arr[i] > max) max = arr[i];\n}\nSystem.out.println(\"Maximum is: \" + max);",
      "int max = 0;\nfor (int i = 0; i <= n; i++) {\n    if (arr[i] < max) max = arr[i];\n}\nSystem.out.println(\"Maximum is: \" + max);",
      "int max = arr[n - 1];\nfor (int i = 0; i < n; i++) {\n    if (arr[i] == max) max = arr[i];\n}\nSystem.out.println(\"Maximum is: \" + max);",
      "int max = -1;\nfor (int i = 0; i < n; i++) {\n    max += arr[i];\n}\nSystem.out.println(\"Maximum is: \" + max);"
    ],
    "correctIndex": 0,
    "explanation": "Initialize `max` with `arr[0]` and update whenever `arr[i] > max`. Option B has an `ArrayIndexOutOfBoundsException` (`<= n`).",
    "fullCode": "import java.util.Scanner;\n\npublic class W02_P3 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n        int max = arr[0];\n        for (int i = 1; i < n; i++) {\n            if (arr[i] > max) max = arr[i];\n        }\n        System.out.println(\"Maximum is: \" + max);\n        sc.close();\n    }\n}"
  },
  {
    "id": "W02_P04",
    "week": 2,
    "num": 4,
    "title": "Create a Class and Access Member Variables",
    "problem": "Create a class Rectangle with length and width. In main, instantiate Rectangle, assign values from user input, and print their sum.",
    "testCase": "Input: 10 20\nExpected Output: 30",
    "templateCode": "import java.util.Scanner;\n\npublic class W02_P4 {\n    /* >>> [PUT CLASS DECLARATION BELOW] <<< */\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        /* >>> [PUT OBJECT CREATION & SUM CODE BELOW] <<< */\n        sc.close();\n    }\n}",
    "studentCode": "static class Rectangle {\n    int length;\n    int width;\n}\n// in main:\nRectangle r = new Rectangle();\nr.length = sc.nextInt();\nr.width = sc.nextInt();\nSystem.out.println(r.length + r.width);",
    "question": "Which combination correctly declares the Rectangle class and accesses its members in main?",
    "options": [
      "static class Rectangle {\n    int length, width;\n}\n// in main:\nRectangle r = new Rectangle();\nr.length = sc.nextInt();\nr.width = sc.nextInt();\nSystem.out.println(r.length + r.width);",
      "class Rectangle {\n    void length, width;\n}\n// in main:\nRectangle r = Rectangle();\nSystem.out.println(r.length + r.width);",
      "static class Rectangle {\n    int length, width;\n}\n// in main:\nRectangle r = new Rectangle(sc.nextInt(), sc.nextInt());\nSystem.out.println(r);",
      "static class Rectangle {\n    private int length, width;\n}\n// in main:\nRectangle r = new Rectangle();\nSystem.out.println(Rectangle.length + Rectangle.width);"
    ],
    "correctIndex": 0,
    "explanation": "Inner class must be static to instantiate directly inside static `main`. Fields are set via `r.length = sc.nextInt()` and accessed directly.",
    "fullCode": "import java.util.Scanner;\n\npublic class W02_P4 {\n    static class Rectangle {\n        int length;\n        int width;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Rectangle r = new Rectangle();\n        r.length = sc.nextInt();\n        r.width = sc.nextInt();\n        System.out.println(r.length + r.width);\n        sc.close();\n    }\n}"
  },
  {
    "id": "W02_P05",
    "week": 2,
    "num": 5,
    "title": "Constructors and 'this' Keyword",
    "problem": "Declare class Circle with member radius. Write a constructor that assigns the parameter using 'this.radius = radius'. In main, create an object and print radius.",
    "testCase": "Input: 15\nExpected Output: 15",
    "templateCode": "import java.util.Scanner;\n\npublic class W02_P5 {\n    /* >>> [PUT CLASS CIRCLE DECLARATION BELOW] <<< */\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        /* >>> [PUT OBJECT CREATION BELOW] <<< */\n        sc.close();\n    }\n}",
    "studentCode": "static class Circle {\n    int radius;\n    Circle(int radius) {\n        this.radius = radius;\n    }\n}\n// in main:\nCircle c = new Circle(sc.nextInt());\nSystem.out.println(c.radius);",
    "question": "Which code snippet correctly demonstrates constructor parameter shadowing resolved with 'this'?",
    "options": [
      "static class Circle {\n    int radius;\n    Circle(int radius) {\n        this.radius = radius;\n    }\n}\n// in main:\nCircle c = new Circle(sc.nextInt());\nSystem.out.println(c.radius);",
      "static class Circle {\n    int radius;\n    void Circle(int radius) {\n        radius = radius;\n    }\n}\n// in main:\nCircle c = new Circle();",
      "static class Circle {\n    int radius;\n    Circle() {\n        this.radius = 10;\n    }\n}\n// in main:\nCircle c = new Circle(sc.nextInt());",
      "class Circle {\n    int radius;\n    Circle(int r) {\n        this = r;\n    }\n}"
    ],
    "correctIndex": 0,
    "explanation": "Constructors have no return type. `this.radius` explicitly disambiguates the instance field from the method parameter.",
    "fullCode": "import java.util.Scanner;\n\npublic class W02_P5 {\n    static class Circle {\n        int radius;\n        Circle(int radius) {\n            this.radius = radius;\n        }\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Circle c = new Circle(sc.nextInt());\n        System.out.println(c.radius);\n        sc.close();\n    }\n}"
  },
  {
    "id": "W03_P01",
    "week": 3,
    "num": 1,
    "title": "Recursive Factorial",
    "problem": "Write a recursive method factorial(int x) to compute the factorial of a number.",
    "testCase": "Input: 5\nExpected Output: 120",
    "templateCode": "import java.util.Scanner;\n\nclass W03_P1 {\n    /* >>> [PUT RECURSIVE METHOD BELOW] <<< */\n\n    public static void main(String[] args) {\n        Scanner in = new Scanner(System.in);\n        int x = in.nextInt();\n        System.out.println(factorial(x));\n    }\n}",
    "studentCode": "public static int factorial(int x) {\n    if (x == 0 || x == 1) {\n        return 1;\n    } else {\n        return factorial(x - 1) * x;\n    }\n}",
    "question": "Which method implementation correctly calculates factorial recursively?",
    "options": [
      "public static int factorial(int x) {\n    if (x == 0 || x == 1) return 1;\n    return factorial(x - 1) * x;\n}",
      "public static int factorial(int x) {\n    if (x == 0) return 0;\n    return factorial(x - 1) * x;\n}",
      "public static int factorial(int x) {\n    return factorial(x) * (x - 1);\n}",
      "public static int factorial(int x) {\n    int f = 1;\n    for(int i=1; i<=x; i++) f *= i;\n    return f;\n}"
    ],
    "correctIndex": 0,
    "explanation": "Base condition handles 0 and 1 returning 1; recursive call decreases x by 1 (`factorial(x - 1) * x`).",
    "fullCode": "import java.util.Scanner;\n\nclass W03_P1 {\n    public static int factorial(int x) {\n        if (x == 0 || x == 1) return 1;\n        return factorial(x - 1) * x;\n    }\n    public static void main(String[] args) {\n        Scanner in = new Scanner(System.in);\n        int x = in.nextInt();\n        System.out.println(factorial(x));\n    }\n}"
  },
  {
    "id": "W03_P02",
    "week": 3,
    "num": 2,
    "title": "Subclass Methods and Arithmetic",
    "problem": "Given class cls1 with method add(p, q), create class cls2 that extends cls1 and implements method mul(p, q) to print their product.",
    "testCase": "Input: 4 5\nExpected Output:\n9\n20",
    "templateCode": "import java.util.Scanner;\n\nclass cls1 {\n    void add(int p, int q) {\n        System.out.println(p + q);\n    }\n}\n\n/* >>> [PUT SUBCLASS DECLARATION BELOW] <<< */\n\npublic class W03_P2 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        cls2 obj = new cls2();\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        obj.add(a, b);\n        obj.mul(a, b);\n    }\n}",
    "studentCode": "class cls2 extends cls1 {\n    void mul(int p, int q) {\n        System.out.println(p * q);\n    }\n}",
    "question": "Which declaration for subclass cls2 correctly inherits cls1 and adds mul(p, q)?",
    "options": [
      "class cls2 extends cls1 {\n    void mul(int p, int q) {\n        System.out.println(p * q);\n    }\n}",
      "class cls2 implements cls1 {\n    void mul(int p, int q) {\n        System.out.println(p * q);\n    }\n}",
      "class cls2 : cls1 {\n    void mul(int p, int q) {\n        System.out.println(p * q);\n    }\n}",
      "class cls2 extends cls1 {\n    int mul(int p, int q) {\n        return p + q;\n    }\n}"
    ],
    "correctIndex": 0,
    "explanation": "Subclassing in Java uses `extends`. Inside `cls2`, `mul` multiplies `p * q` and prints the output.",
    "fullCode": "import java.util.Scanner;\n\nclass cls1 {\n    void add(int p, int q) {\n        System.out.println(p + q);\n    }\n}\n\nclass cls2 extends cls1 {\n    void mul(int p, int q) {\n        System.out.println(p * q);\n    }\n}\n\npublic class W03_P2 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        cls2 obj = new cls2();\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        obj.add(a, b);\n        obj.mul(a, b);\n    }\n}"
  },
  {
    "id": "W03_P03",
    "week": 3,
    "num": 3,
    "title": "Count Number of Digits",
    "problem": "Count and print the total number of digits in a given non-zero integer using a while loop.",
    "testCase": "Input: 12345\nExpected Output: 5",
    "templateCode": "import java.util.Scanner;\n\npublic class W03_P3 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num = sc.nextInt();\n        int count = 0;\n\n        /* >>> [PUT YOUR CODE BELOW] <<< */\n\n        System.out.println(count);\n    }\n}",
    "studentCode": "while (num != 0) {\n    num /= 10;\n    count++;\n}",
    "question": "Which loop correctly counts digits by stripping the least significant digit on each iteration?",
    "options": [
      "while (num != 0) {\n    num /= 10;\n    count++;\n}",
      "while (num > 0) {\n    num %= 10;\n    count++;\n}",
      "for (int i = 0; i < num; i++) {\n    count += 10;\n}",
      "while (num != 0) {\n    num -= 10;\n    count++;\n}"
    ],
    "correctIndex": 0,
    "explanation": "`num /= 10` repeatedly eliminates the rightmost digit, incrementing `count` until `num` becomes 0.",
    "fullCode": "import java.util.Scanner;\n\npublic class W03_P3 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num = sc.nextInt();\n        int count = 0;\n        while (num != 0) {\n            num /= 10;\n            count++;\n        }\n        System.out.println(count);\n    }\n}"
  },
  {
    "id": "W03_P04",
    "week": 3,
    "num": 4,
    "title": "Encapsulation (Getters and Setters)",
    "problem": "Define getters and setters for private fields name (String) and age (int) in Student class.",
    "testCase": "Input: John 20\nExpected Output: Name: John, Age: 20",
    "templateCode": "import java.util.Scanner;\n\nclass Student {\n    private String name;\n    private int age;\n\n    /* >>> [PUT GETTERS AND SETTERS BELOW] <<< */\n}\n\npublic class W03_P4 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Student s = new Student();\n        s.setName(sc.next());\n        s.setAge(sc.nextInt());\n        System.out.println(\"Name: \" + s.getName() + \", Age: \" + s.getAge());\n    }\n}",
    "studentCode": "public String getName() { return name; }\npublic void setName(String name) { this.name = name; }\npublic int getAge() { return age; }\npublic void setAge(int age) { this.age = age; }",
    "question": "Which code snippet correctly implements JavaBean standard getters and setters?",
    "options": [
      "public String getName() { return name; }\npublic void setName(String name) { this.name = name; }\npublic int getAge() { return age; }\npublic void setAge(int age) { this.age = age; }",
      "public void getName() { System.out.println(name); }\npublic void setName(String n) { name = n; }",
      "private String getName() { return name; }\nprivate void setName(String name) { this.name = name; }",
      "public String name() { return name; }\npublic void name(String name) { this.name = name; }"
    ],
    "correctIndex": 0,
    "explanation": "JavaBean convention: `get<Property>()` returns the variable, and `set<Property>(type val)` sets the variable.",
    "fullCode": "import java.util.Scanner;\n\nclass Student {\n    private String name;\n    private int age;\n\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n    public int getAge() { return age; }\n    public void setAge(int age) { this.age = age; }\n}\n\npublic class W03_P4 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Student s = new Student();\n        s.setName(sc.next());\n        s.setAge(sc.nextInt());\n        System.out.println(\"Name: \" + s.getName() + \", Age: \" + s.getAge());\n    }\n}"
  },
  {
    "id": "W03_P05",
    "week": 3,
    "num": 5,
    "title": "Factors of a Number",
    "problem": "Write a Java program to print all factors of a given positive integer separated by spaces.",
    "testCase": "Input: 12\nExpected Output: 1 2 3 4 6 12",
    "templateCode": "import java.util.Scanner;\n\npublic class W03_P5 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num = sc.nextInt();\n\n        /* >>> [PUT YOUR CODE BELOW] <<< */\n\n        sc.close();\n    }\n}",
    "studentCode": "for (int i = 1; i <= num; i++) {\n    if (num % i == 0) {\n        System.out.print(i + \" \");\n    }\n}",
    "question": "Which loop correctly discovers and prints all divisors of num from 1 to num inclusive?",
    "options": [
      "for (int i = 1; i <= num; i++) {\n    if (num % i == 0) System.out.print(i + \" \");\n}",
      "for (int i = 2; i < num; i++) {\n    if (num % i == 0) System.out.print(i + \" \");\n}",
      "for (int i = 1; i <= num; i++) {\n    if (num / i == 0) System.out.print(i + \" \");\n}",
      "for (int i = 1; i < num; i++) {\n    if (i % num == 0) System.out.print(i + \" \");\n}"
    ],
    "correctIndex": 0,
    "explanation": "Factors range from 1 to `num` inclusive. `num % i == 0` tests divisibility.",
    "fullCode": "import java.util.Scanner;\n\npublic class W03_P5 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num = sc.nextInt();\n        for (int i = 1; i <= num; i++) {\n            if (num % i == 0) System.out.print(i + \" \");\n        }\n        sc.close();\n    }\n}"
  },
  {
    "id": "W04_P01",
    "week": 4,
    "num": 1,
    "title": "Default Access Modifier",
    "problem": "Demonstrate the default (package-private) access modifier in class Student.",
    "testCase": "Input: 101\nExpected Output: 101",
    "templateCode": "import java.util.Scanner;\n\npublic class W04_P1 {\n    /* >>> [PUT STUDENT CLASS HERE] <<< */\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Student s = new Student(sc.nextInt());\n        System.out.println(s.rollNo);\n    }\n}",
    "studentCode": "static class Student {\n    int rollNo; // default access\n    Student(int r) {\n        rollNo = r;\n    }\n}",
    "question": "Which declaration represents default (package-private) access for the rollNo member?",
    "options": [
      "static class Student {\n    int rollNo;\n    Student(int r) { rollNo = r; }\n}",
      "static class Student {\n    default int rollNo;\n    Student(int r) { rollNo = r; }\n}",
      "static class Student {\n    private int rollNo;\n    Student(int r) { rollNo = r; }\n}",
      "static class Student {\n    public static int rollNo;\n}"
    ],
    "correctIndex": 0,
    "explanation": "In Java, default access has no keyword specified (`int rollNo;`). `default` is only a keyword for interface default methods and switch cases.",
    "fullCode": "import java.util.Scanner;\n\npublic class W04_P1 {\n    static class Student {\n        int rollNo;\n        Student(int r) {\n            rollNo = r;\n        }\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Student s = new Student(sc.nextInt());\n        System.out.println(s.rollNo);\n    }\n}"
  },
  {
    "id": "W04_P02",
    "week": 4,
    "num": 2,
    "title": "Public Access Modifier",
    "problem": "Create class Car with public variable speed, and access it in main.",
    "testCase": "Input: 80\nExpected Output: 80",
    "templateCode": "import java.util.Scanner;\n\npublic class W04_P2 {\n    /* >>> [PUT CAR CLASS HERE] <<< */\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Car c = new Car();\n        c.speed = sc.nextInt();\n        System.out.println(c.speed);\n    }\n}",
    "studentCode": "static class Car {\n    public int speed;\n}",
    "question": "Which snippet correctly declares the Car class with a public speed member?",
    "options": [
      "static class Car {\n    public int speed;\n}",
      "static class Car {\n    private int speed;\n}",
      "class Car {\n    protected static speed;\n}",
      "public class Car {\n    int speed;\n}"
    ],
    "correctIndex": 0,
    "explanation": "`public int speed;` makes the member accessible everywhere without restrictions.",
    "fullCode": "import java.util.Scanner;\n\npublic class W04_P2 {\n    static class Car {\n        public int speed;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Car c = new Car();\n        c.speed = sc.nextInt();\n        System.out.println(c.speed);\n    }\n}"
  },
  {
    "id": "W04_P03",
    "week": 4,
    "num": 3,
    "title": "Private Access Modifier with Getters & Setters",
    "problem": "Create class Account with private field balance, accessible solely through setBalance and getBalance.",
    "testCase": "Input: 5000\nExpected Output: 5000",
    "templateCode": "import java.util.Scanner;\n\npublic class W04_P3 {\n    /* >>> [PUT ACCOUNT CLASS HERE] <<< */\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Account a = new Account();\n        a.setBalance(sc.nextInt());\n        System.out.println(a.getBalance());\n    }\n}",
    "studentCode": "static class Account {\n    private int balance;\n    public void setBalance(int b) { balance = b; }\n    public int getBalance() { return balance; }\n}",
    "question": "Which code snippet correctly protects balance with private access while exposing public getter and setter?",
    "options": [
      "static class Account {\n    private int balance;\n    public void setBalance(int b) { balance = b; }\n    public int getBalance() { return balance; }\n}",
      "static class Account {\n    public int balance;\n    private void setBalance(int b) { balance = b; }\n}",
      "static class Account {\n    private int balance;\n    private int getBalance() { return balance; }\n}",
      "class Account {\n    int balance;\n    void setBalance(int b) { balance = b; }\n}"
    ],
    "correctIndex": 0,
    "explanation": "Field `balance` must be `private` for encapsulation, and the accessor methods must be `public` so main can invoke them.",
    "fullCode": "import java.util.Scanner;\n\npublic class W04_P3 {\n    static class Account {\n        private int balance;\n        public void setBalance(int b) { balance = b; }\n        public int getBalance() { return balance; }\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Account a = new Account();\n        a.setBalance(sc.nextInt());\n        System.out.println(a.getBalance());\n    }\n}"
  },
  {
    "id": "W04_P04",
    "week": 4,
    "num": 4,
    "title": "Protected Access Modifier",
    "problem": "Create class Employee with protected member salary. Subclass Manager extends Employee and accesses salary directly.",
    "testCase": "Input: 75000\nExpected Output: 75000",
    "templateCode": "import java.util.Scanner;\n\npublic class W04_P4 {\n    /* >>> [PUT EMPLOYEE AND MANAGER CLASSES HERE] <<< */\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Manager m = new Manager();\n        m.salary = sc.nextInt();\n        m.printSalary();\n    }\n}",
    "studentCode": "static class Employee {\n    protected int salary;\n}\nstatic class Manager extends Employee {\n    void printSalary() {\n        System.out.println(salary);\n    }\n}",
    "question": "Which snippet correctly implements inheritance with the protected modifier?",
    "options": [
      "static class Employee {\n    protected int salary;\n}\nstatic class Manager extends Employee {\n    void printSalary() { System.out.println(salary); }\n}",
      "static class Employee {\n    private int salary;\n}\nstatic class Manager extends Employee {\n    void printSalary() { System.out.println(salary); }\n}",
      "static class Employee {\n    protected int salary;\n}\nstatic class Manager implements Employee {\n    void printSalary() { System.out.println(salary); }\n}",
      "class Employee {\n    int salary;\n}\nclass Manager {\n    void printSalary() { System.out.println(salary); }\n}"
    ],
    "correctIndex": 0,
    "explanation": "`protected` members can be inherited and accessed directly in derived classes (`Manager extends Employee`).",
    "fullCode": "import java.util.Scanner;\n\npublic class W04_P4 {\n    static class Employee {\n        protected int salary;\n    }\n    static class Manager extends Employee {\n        void printSalary() {\n            System.out.println(salary);\n        }\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Manager m = new Manager();\n        m.salary = sc.nextInt();\n        m.printSalary();\n    }\n}"
  },
  {
    "id": "W04_P05",
    "week": 4,
    "num": 5,
    "title": "Method Overloading with Access Modifiers",
    "problem": "Create class Calculator with overloaded add methods: add(int a, int b) and add(int a, int b, int c).",
    "testCase": "Input: 10 20 30\nExpected Output:\n30\n60",
    "templateCode": "import java.util.Scanner;\n\npublic class W04_P5 {\n    /* >>> [PUT CALCULATOR CLASS HERE] <<< */\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Calculator c = new Calculator();\n        int x = sc.nextInt(), y = sc.nextInt(), z = sc.nextInt();\n        System.out.println(c.add(x, y));\n        System.out.println(c.add(x, y, z));\n    }\n}",
    "studentCode": "static class Calculator {\n    public int add(int a, int b) { return a + b; }\n    public int add(int a, int b, int c) { return a + b + c; }\n}",
    "question": "Which code snippet correctly demonstrates method overloading in class Calculator?",
    "options": [
      "static class Calculator {\n    public int add(int a, int b) { return a + b; }\n    public int add(int a, int b, int c) { return a + b + c; }\n}",
      "static class Calculator {\n    public int add(int a, int b) { return a + b; }\n    public double add(int a, int b) { return (double)(a + b); }\n}",
      "static class Calculator {\n    void add(int a, int b) { System.out.println(a + b); }\n}",
      "class Calculator {\n    public int add1(int a, int b) { return a + b; }\n    public int add2(int a, int b, int c) { return a + b + c; }\n}"
    ],
    "correctIndex": 0,
    "explanation": "Method overloading requires the same method name with differing parameter lists (different number or types of parameters). Return type differences alone (Option B) are not permitted in Java.",
    "fullCode": "import java.util.Scanner;\n\npublic class W04_P5 {\n    static class Calculator {\n        public int add(int a, int b) { return a + b; }\n        public int add(int a, int b, int c) { return a + b + c; }\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Calculator c = new Calculator();\n        int x = sc.nextInt(), y = sc.nextInt(), z = sc.nextInt();\n        System.out.println(c.add(x, y));\n        System.out.println(c.add(x, y, z));\n    }\n}"
  },
  {
    "id": "W05_P01",
    "week": 5,
    "num": 1,
    "title": "Implementing an Interface to Find Square",
    "problem": "Define an interface Number with method int findSqr(int i) and implement it in class A.",
    "testCase": "Input: 7\nExpected Output: 49",
    "templateCode": "import java.util.Scanner;\n\ninterface Number {\n    int findSqr(int i);\n}\n\n/* >>> [PUT CLASS A IMPLEMENTATION HERE] <<< */\n\npublic class W05_P1 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        A a = new A();\n        int n = sc.nextInt();\n        System.out.println(a.findSqr(n));\n    }\n}",
    "studentCode": "class A implements Number {\n    public int findSqr(int i) {\n        return i * i;\n    }\n}",
    "question": "Which class definition correctly implements the Number interface?",
    "options": [
      "class A implements Number {\n    public int findSqr(int i) { return i * i; }\n}",
      "class A extends Number {\n    int findSqr(int i) { return i * i; }\n}",
      "class A implements Number {\n    int findSqr(int i) { return i * i; }\n}",
      "interface A implements Number {\n    public int findSqr(int i);\n}"
    ],
    "correctIndex": 0,
    "explanation": "Methods declared in interfaces are implicitly `public abstract`. When implementing them in a concrete class, the method MUST be explicitly declared `public` (otherwise it reduces visibility and causes a compilation error, as in Option C).",
    "fullCode": "import java.util.Scanner;\n\ninterface Number {\n    int findSqr(int i);\n}\n\nclass A implements Number {\n    public int findSqr(int i) {\n        return i * i;\n    }\n}\n\npublic class W05_P1 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        A a = new A();\n        int n = sc.nextInt();\n        System.out.println(a.findSqr(n));\n    }\n}"
  },
  {
    "id": "W05_P02",
    "week": 5,
    "num": 2,
    "title": "Recursive GCD with Interface",
    "problem": "Implement interface GCD with method int findGCD(int n1, int n2) using the recursive Euclidean algorithm in class B.",
    "testCase": "Input: 24 36\nExpected Output: 12",
    "templateCode": "import java.util.Scanner;\n\ninterface GCD {\n    public int findGCD(int n1, int n2);\n}\n\n/* >>> [PUT CLASS B IMPLEMENTATION HERE] <<< */\n\npublic class W05_P2 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        B b = new B();\n        int a = sc.nextInt(), c = sc.nextInt();\n        System.out.println(b.findGCD(a, c));\n    }\n}",
    "studentCode": "class B implements GCD {\n    public int findGCD(int n1, int n2) {\n        if (n2 == 0) return n1;\n        return findGCD(n2, n1 % n2);\n    }\n}",
    "question": "Which implementation of findGCD correctly implements the Euclidean algorithm?",
    "options": [
      "class B implements GCD {\n    public int findGCD(int n1, int n2) {\n        if (n2 == 0) return n1;\n        return findGCD(n2, n1 % n2);\n    }\n}",
      "class B implements GCD {\n    public int findGCD(int n1, int n2) {\n        if (n1 == 0) return 0;\n        return findGCD(n1 - n2, n2);\n    }\n}",
      "class B extends GCD {\n    public int findGCD(int n1, int n2) { return n1 * n2; }\n}",
      "class B implements GCD {\n    int findGCD(int n1, int n2) { return 1; }\n}"
    ],
    "correctIndex": 0,
    "explanation": "Euclidean GCD algorithm: $\\gcd(a, b) = \\gcd(b, a \\pmod b)$, with base case $\\gcd(a, 0) = a$.",
    "fullCode": "import java.util.Scanner;\n\ninterface GCD {\n    public int findGCD(int n1, int n2);\n}\n\nclass B implements GCD {\n    public int findGCD(int n1, int n2) {\n        if (n2 == 0) return n1;\n        return findGCD(n2, n1 % n2);\n    }\n}\n\npublic class W05_P2 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        B b = new B();\n        int a = sc.nextInt(), c = sc.nextInt();\n        System.out.println(b.findGCD(a, c));\n    }\n}"
  },
  {
    "id": "W05_P03",
    "week": 5,
    "num": 3,
    "title": "Catching ArithmeticException",
    "problem": "Safely read two integers and divide them in a try-catch block catching ArithmeticException on division by zero.",
    "testCase": "Input: 10 0\nExpected Output: Exception: Division by zero",
    "templateCode": "import java.util.Scanner;\n\npublic class W05_P3 {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        int a = input.nextInt();\n        int b = input.nextInt();\n\n        /* >>> [PUT TRY-CATCH BLOCK HERE] <<< */\n\n    }\n}",
    "studentCode": "try {\n    int result = a / b;\n    System.out.println(result);\n} catch (ArithmeticException e) {\n    System.out.println(\"Exception: Division by zero\");\n}",
    "question": "Which code snippet correctly handles division by zero using ArithmeticException?",
    "options": [
      "try {\n    int result = a / b;\n    System.out.println(result);\n} catch (ArithmeticException e) {\n    System.out.println(\"Exception: Division by zero\");\n}",
      "try {\n    int result = a / b;\n    System.out.println(result);\n} catch (IOException e) {\n    System.out.println(\"Exception: Division by zero\");\n}",
      "if (b != 0) {\n    System.out.println(a / b);\n} else throw new Exception();",
      "try {\n    int result = a / b;\n} finally {\n    System.out.println(\"Division by zero\");\n}"
    ],
    "correctIndex": 0,
    "explanation": "Integer division by zero in Java throws an unchecked `java.lang.ArithmeticException` which must be caught using `catch (ArithmeticException e)`.",
    "fullCode": "import java.util.Scanner;\n\npublic class W05_P3 {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        int a = input.nextInt();\n        int b = input.nextInt();\n        try {\n            int result = a / b;\n            System.out.println(result);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Exception: Division by zero\");\n        }\n    }\n}"
  },
  {
    "id": "W05_P04",
    "week": 5,
    "num": 4,
    "title": "InputMismatchException Handling",
    "problem": "Read array elements. If non-integer input is given, catch InputMismatchException and print 'You entered bad data'.",
    "testCase": "Input: 3 10 abc\nExpected Output: You entered bad data",
    "templateCode": "import java.util.Scanner;\nimport java.util.InputMismatchException;\n\npublic class W05_P4 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int length = sc.nextInt();\n        int[] name = new int[length];\n\n        /* >>> [PUT INPUT LOOP & EXCEPTION HANDLING HERE] <<< */\n\n    }\n}",
    "studentCode": "try {\n    for (int i = 0; i < length; i++) {\n        name[i] = sc.nextInt();\n    }\n} catch (InputMismatchException e) {\n    System.out.println(\"You entered bad data\");\n}",
    "question": "Which block catches non-integer input when reading integers using Scanner?",
    "options": [
      "try {\n    for (int i = 0; i < length; i++) name[i] = sc.nextInt();\n} catch (InputMismatchException e) {\n    System.out.println(\"You entered bad data\");\n}",
      "try {\n    for (int i = 0; i < length; i++) name[i] = sc.nextInt();\n} catch (NumberFormatException e) {\n    System.out.println(\"You entered bad data\");\n}",
      "try {\n    for (int i = 0; i < length; i++) name[i] = sc.nextInt();\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println(\"You entered bad data\");\n}",
      "for (int i = 0; i < length; i++) {\n    if (!sc.hasNext()) throw new Error();\n}"
    ],
    "correctIndex": 0,
    "explanation": "`Scanner.nextInt()` throws `InputMismatchException` (from `java.util`) when token cannot be translated into an integer.",
    "fullCode": "import java.util.Scanner;\nimport java.util.InputMismatchException;\n\npublic class W05_P4 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int length = sc.nextInt();\n        int[] name = new int[length];\n        try {\n            for (int i = 0; i < length; i++) {\n                name[i] = sc.nextInt();\n            }\n        } catch (InputMismatchException e) {\n            System.out.println(\"You entered bad data\");\n        }\n    }\n}"
  },
  {
    "id": "W05_P05",
    "week": 5,
    "num": 5,
    "title": "Handling Multiple Exceptions with Generic Catch",
    "problem": "Catch any runtime exception occurring during execution by catching generic Exception.",
    "testCase": "Input: 10\nExpected Output: java.lang.ArithmeticException: / by zero",
    "templateCode": "import java.util.Scanner;\n\npublic class W05_P5 {\n    public static void main(String args[]) {\n        Scanner scan = new Scanner(System.in);\n        int i = scan.nextInt();\n        int j = 0;\n\n        /* >>> [PUT TRY-CATCH HERE] <<< */\n\n    }\n}",
    "studentCode": "try {\n    int k = i / j;\n    System.out.println(k);\n} catch (Exception e) {\n    System.out.println(e);\n}",
    "question": "Which try-catch block catches any standard exception and prints the exception object?",
    "options": [
      "try {\n    int k = i / j;\n    System.out.println(k);\n} catch (Exception e) {\n    System.out.println(e);\n}",
      "try {\n    int k = i / j;\n} catch (Throwable e) {\n    System.out.print(\"Error\");\n}",
      "try {\n    int k = i / j;\n} finally {\n    System.out.println(e);\n}",
      "try (int k = i / j) {\n    System.out.println(k);\n}"
    ],
    "correctIndex": 0,
    "explanation": "`catch (Exception e)` acts as a polymorphic catch block for all standard checked and unchecked exceptions.",
    "fullCode": "import java.util.Scanner;\n\npublic class W05_P5 {\n    public static void main(String args[]) {\n        Scanner scan = new Scanner(System.in);\n        int i = scan.nextInt();\n        int j = 0;\n        try {\n            int k = i / j;\n            System.out.println(k);\n        } catch (Exception e) {\n            System.out.println(e);\n        }\n    }\n}"
  },
  {
    "id": "W06_P01",
    "week": 6,
    "num": 1,
    "title": "Safe Division with Exception Handling",
    "problem": "Read two integers num1 and num2. Safely divide them inside try-catch. If divisor is zero, catch ArithmeticException and print 'Cannot divide by zero'. Otherwise print 'Result is: <res>'.",
    "testCase": "Input: 10 2\nExpected Output: Result is: 5",
    "templateCode": "import java.util.Scanner;\n\npublic class W06_P1 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num1 = sc.nextInt();\n        int num2 = sc.nextInt();\n\n        /* >>> [PUT YOUR CODE BELOW] <<< */\n\n        sc.close();\n    }\n}",
    "studentCode": "try {\n    int result = num1 / num2;\n    System.out.println(\"Result is: \" + result);\n} catch (ArithmeticException e) {\n    System.out.println(\"Cannot divide by zero\");\n}",
    "question": "Which code snippet correctly implements safe division and outputs the exact required string?",
    "options": [
      "try {\n    int result = num1 / num2;\n    System.out.println(\"Result is: \" + result);\n} catch (ArithmeticException e) {\n    System.out.println(\"Cannot divide by zero\");\n}",
      "if (num2 == 0) {\n    System.out.println(\"Cannot divide by zero\");\n} else {\n    System.out.println(\"Result is: \" + (num1 / num2));\n}",
      "try {\n    System.out.println(\"Result is: \" + (num1 / num2));\n} catch (NullPointerException e) {\n    System.out.println(\"Cannot divide by zero\");\n}",
      "try {\n    int result = num1 % num2;\n    System.out.println(\"Result is: \" + result);\n} catch (Exception e) {}"
    ],
    "correctIndex": 0,
    "explanation": "Division requires `/` and division by zero must be caught via `ArithmeticException`.",
    "fullCode": "import java.util.Scanner;\n\npublic class W06_P1 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num1 = sc.nextInt();\n        int num2 = sc.nextInt();\n        try {\n            int result = num1 / num2;\n            System.out.println(\"Result is: \" + result);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Cannot divide by zero\");\n        }\n        sc.close();\n    }\n}"
  },
  {
    "id": "W06_P02",
    "week": 6,
    "num": 2,
    "title": "Nested try-catch Block",
    "problem": "Demonstrate nested try-catch blocks where the inner block handles ArithmeticException.",
    "testCase": "Input: 20 0\nExpected Output: Inner catch: Division by zero",
    "templateCode": "import java.util.Scanner;\n\npublic class W06_P2 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n\n        /* >>> [PUT NESTED TRY-CATCH HERE] <<< */\n\n        sc.close();\n    }\n}",
    "studentCode": "try {\n    try {\n        int res = a / b;\n        System.out.println(\"Result: \" + res);\n    } catch (ArithmeticException e) {\n        System.out.println(\"Inner catch: Division by zero\");\n    }\n} catch (Exception e) {\n    System.out.println(\"Outer catch\");\n}",
    "question": "Which code structure correctly represents nested try-catch blocks in Java?",
    "options": [
      "try {\n    try {\n        int res = a / b;\n        System.out.println(\"Result: \" + res);\n    } catch (ArithmeticException e) {\n        System.out.println(\"Inner catch: Division by zero\");\n    }\n} catch (Exception e) {\n    System.out.println(\"Outer catch\");\n}",
      "try {\n    int res = a / b;\n} catch (ArithmeticException e) {\n    catch (Exception ex) {}\n}",
      "try (try { int res = a / b; }) {}",
      "try { int res = a / b; } catch (ArithmeticException e, Exception ex) {}"
    ],
    "correctIndex": 0,
    "explanation": "A `try` block nested inside an enclosing `try` block allows local exception recovery before the outer catch block is considered.",
    "fullCode": "import java.util.Scanner;\n\npublic class W06_P2 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        try {\n            try {\n                int res = a / b;\n                System.out.println(\"Result: \" + res);\n            } catch (ArithmeticException e) {\n                System.out.println(\"Inner catch: Division by zero\");\n            }\n        } catch (Exception e) {\n            System.out.println(\"Outer catch\");\n        }\n        sc.close();\n    }\n}"
  },
  {
    "id": "W06_P03",
    "week": 6,
    "num": 3,
    "title": "try Block with Multiple catch Blocks",
    "problem": "Demonstrate proper order of multiple catch blocks: specific exceptions first, followed by general Exception.",
    "testCase": "Input: 10 0\nExpected Output: Arithmetic error",
    "templateCode": "import java.util.Scanner;\n\npublic class W06_P3 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n\n        /* >>> [PUT MULTIPLE CATCH BLOCKS HERE] <<< */\n\n    }\n}",
    "studentCode": "try {\n    int res = a / b;\n    System.out.println(\"Result: \" + res);\n} catch (ArithmeticException e) {\n    System.out.println(\"Arithmetic error\");\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println(\"Array index error\");\n} catch (Exception e) {\n    System.out.println(\"General error\");\n}",
    "question": "What is the critical rule for ordering multiple catch blocks in Java?",
    "options": [
      "Subclass (more specific) exceptions must be caught before superclass (more general) exceptions.",
      "General `Exception` must always be placed as the first catch block.",
      "All catch blocks must have the exact same exception parameter name.",
      "Exceptions can be listed in any random order without compiler error."
    ],
    "correctIndex": 0,
    "explanation": "If a superclass catch block (like `catch (Exception e)`) appears before a subclass catch block (`catch (ArithmeticException e)`), the subclass catch block is unreachable and causes a compilation error.",
    "fullCode": "import java.util.Scanner;\n\npublic class W06_P3 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        try {\n            int res = a / b;\n            System.out.println(\"Result: \" + res);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Arithmetic error\");\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Array index error\");\n        } catch (Exception e) {\n            System.out.println(\"General error\");\n        }\n    }\n}"
  },
  {
    "id": "W06_P04",
    "week": 6,
    "num": 4,
    "title": "Using finally in Exception Handling",
    "problem": "Show that code in a finally block always executes regardless of whether an exception is thrown or caught.",
    "testCase": "Input: 10 0\nExpected Output:\nDivision by zero error\nFinally block executed",
    "templateCode": "import java.util.Scanner;\n\npublic class W06_P4 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n\n        /* >>> [PUT TRY-CATCH-FINALLY HERE] <<< */\n\n    }\n}",
    "studentCode": "try {\n    int res = a / b;\n    System.out.println(res);\n} catch (ArithmeticException e) {\n    System.out.println(\"Division by zero error\");\n} finally {\n    System.out.println(\"Finally block executed\");\n}",
    "question": "Which statement accurately describes the behavior of the finally block?",
    "options": [
      "The `finally` block always executes whether an exception occurs, is caught, or not.",
      "The `finally` block executes only if an exception is NOT thrown.",
      "The `finally` block executes only when an exception is thrown and caught.",
      "The `finally` block replaces the `catch` block completely."
    ],
    "correctIndex": 0,
    "explanation": "The `finally` block guarantees execution for cleanup tasks (closing files, releasing locks), even if a `return` or unhandled exception occurs.",
    "fullCode": "import java.util.Scanner;\n\npublic class W06_P4 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        try {\n            int res = a / b;\n            System.out.println(res);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Division by zero error\");\n        } finally {\n            System.out.println(\"Finally block executed\");\n        }\n    }\n}"
  },
  {
    "id": "W06_P05",
    "week": 6,
    "num": 5,
    "title": "Using 'throws' to Propagate Exceptions",
    "problem": "Declare method calculateSquareRoot(double num) throws IllegalArgumentException when num < 0.",
    "testCase": "Input: 25.0\nExpected Output: 5.0",
    "templateCode": "import java.util.Scanner;\n\npublic class W06_P5 {\n    /* >>> [PUT METHOD DECLARATION WITH THROWS HERE] <<< */\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double num = sc.nextDouble();\n        try {\n            System.out.println(calculateSquareRoot(num));\n        } catch (IllegalArgumentException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}",
    "studentCode": "public static double calculateSquareRoot(double num) throws IllegalArgumentException {\n    if (num < 0) {\n        throw new IllegalArgumentException(\"Cannot calculate square root of negative number\");\n    }\n    return Math.sqrt(num);\n}",
    "question": "Which syntax correctly uses 'throws' in the method signature and 'throw' to raise the exception?",
    "options": [
      "public static double calculateSquareRoot(double num) throws IllegalArgumentException {\n    if (num < 0) throw new IllegalArgumentException(\"Negative number\");\n    return Math.sqrt(num);\n}",
      "public static double calculateSquareRoot(double num) throw IllegalArgumentException {\n    if (num < 0) throws new IllegalArgumentException(\"Negative number\");\n    return Math.sqrt(num);\n}",
      "public static double calculateSquareRoot(double num) {\n    if (num < 0) catch new IllegalArgumentException();\n    return Math.sqrt(num);\n}",
      "public static double calculateSquareRoot(double num) throws Exception() {\n    return Math.sqrt(num);\n}"
    ],
    "correctIndex": 0,
    "explanation": "`throws` (with 's') is used in method signatures to declare exceptions that might be thrown, whereas `throw` (singular) is an executable statement to instantiate and throw an exception object.",
    "fullCode": "import java.util.Scanner;\n\npublic class W06_P5 {\n    public static double calculateSquareRoot(double num) throws IllegalArgumentException {\n        if (num < 0) {\n            throw new IllegalArgumentException(\"Negative number\");\n        }\n        return Math.sqrt(num);\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double num = sc.nextDouble();\n        try {\n            System.out.println(calculateSquareRoot(num));\n        } catch (IllegalArgumentException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}"
  },
  {
    "id": "W07_P01",
    "week": 7,
    "num": 1,
    "title": "Longest Word in Given Input",
    "problem": "Write a Java program to find the longest word in a given input sentence. If multiple have equal max length, pick the first.",
    "testCase": "Input: Java is an object oriented language\nExpected Output: language",
    "templateCode": "import java.util.Scanner;\n\npublic class W07_P1 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String sentence = sc.nextLine();\n\n        /* >>> [PUT YOUR CODE BELOW] <<< */\n\n    }\n}",
    "studentCode": "String[] words = sentence.split(\" \");\nString longest = \"\";\nfor (String w : words) {\n    if (w.length() > longest.length()) {\n        longest = w;\n    }\n}\nSystem.out.println(longest);",
    "question": "Which code snippet correctly finds the longest word by tokenizing the input string?",
    "options": [
      "String[] words = sentence.split(\" \");\nString longest = \"\";\nfor (String w : words) {\n    if (w.length() > longest.length()) longest = w;\n}\nSystem.out.println(longest);",
      "String[] words = sentence.split(\"\");\nString longest = words[0];\nSystem.out.println(longest);",
      "String longest = sentence.substring(0, sentence.indexOf(\" \"));\nSystem.out.println(longest);",
      "String[] words = sentence.split(\" \");\nString longest = \"\";\nfor (String w : words) {\n    if (w.length() < longest.length()) longest = w;\n}\nSystem.out.println(longest);"
    ],
    "correctIndex": 0,
    "explanation": "`sentence.split(\" \")` splits into words. Comparing `w.length() > longest.length()` keeps track of the longest word encountered so far.",
    "fullCode": "import java.util.Scanner;\n\npublic class W07_P1 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String sentence = sc.nextLine();\n        String[] words = sentence.split(\" \");\n        String longest = \"\";\n        for (String w : words) {\n            if (w.length() > longest.length()) longest = w;\n        }\n        System.out.println(longest);\n    }\n}"
  },
  {
    "id": "W07_P02",
    "week": 7,
    "num": 2,
    "title": "Remove All Occurrences of an Element from Array",
    "problem": "Given an array and target element, create a new array with all occurrences of target removed.",
    "testCase": "Input: 5\n1 2 3 2 4\n2\nExpected Output: 1 3 4",
    "templateCode": "import java.util.Scanner;\n\npublic class W07_P2 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n        int target = sc.nextInt();\n\n        /* >>> [PUT REMOVAL LOGIC HERE] <<< */\n\n    }\n}",
    "studentCode": "int count = 0;\nfor (int x : arr) if (x != target) count++;\nint[] res = new int[count];\nint idx = 0;\nfor (int x : arr) if (x != target) res[idx++] = x;\nfor (int x : res) System.out.print(x + \" \");",
    "question": "Which code snippet correctly constructs the filtered array without target elements?",
    "options": [
      "int count = 0;\nfor (int x : arr) if (x != target) count++;\nint[] res = new int[count];\nint idx = 0;\nfor (int x : arr) if (x != target) res[idx++] = x;\nfor (int x : res) System.out.print(x + \" \");",
      "for (int i = 0; i < n; i++) if (arr[i] == target) arr[i] = 0;",
      "int[] res = new int[n];\nfor (int x : arr) if (x == target) res[x] = x;",
      "arr = null;\nSystem.out.print(\"Array cleared\");"
    ],
    "correctIndex": 0,
    "explanation": "Because Java arrays are fixed size, count how many elements are not equal to `target`, allocate `res` of size `count`, and copy valid elements.",
    "fullCode": "import java.util.Scanner;\n\npublic class W07_P2 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n        int target = sc.nextInt();\n        int count = 0;\n        for (int x : arr) if (x != target) count++;\n        int[] res = new int[count];\n        int idx = 0;\n        for (int x : arr) if (x != target) res[idx++] = x;\n        for (int x : res) System.out.print(x + \" \");\n    }\n}"
  },
  {
    "id": "W07_P03",
    "week": 7,
    "num": 3,
    "title": "Sum of Prime Numbers in a Given Range",
    "problem": "Write a Java program to compute the sum of all prime numbers between start and end (inclusive).",
    "testCase": "Input: 10 20\nExpected Output: 60",
    "templateCode": "import java.util.Scanner;\n\npublic class W07_P3 {\n    /* >>> [PUT ISPRIME METHOD AND SUM LOGIC HERE] <<< */\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int start = sc.nextInt();\n        int end = sc.nextInt();\n        int sum = 0;\n        for (int i = start; i <= end; i++) {\n            if (isPrime(i)) sum += i;\n        }\n        System.out.println(sum);\n    }\n}",
    "studentCode": "public static boolean isPrime(int n) {\n    if (n <= 1) return false;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}",
    "question": "Which helper method correctly identifies whether an integer n is prime?",
    "options": [
      "public static boolean isPrime(int n) {\n    if (n <= 1) return false;\n    for (int i = 2; i * i <= n; i++) if (n % i == 0) return false;\n    return true;\n}",
      "public static boolean isPrime(int n) {\n    if (n == 0) return false;\n    return n % 2 != 0;\n}",
      "public static boolean isPrime(int n) {\n    for (int i = 2; i < n; i++) if (n % i != 0) return true;\n    return false;\n}",
      "public static boolean isPrime(int n) {\n    return n > 1;\n}"
    ],
    "correctIndex": 0,
    "explanation": "Primes are integers greater than 1 with no divisors other than 1 and itself. Checking up to $\\sqrt{n}$ (`i * i <= n`) is optimal.",
    "fullCode": "import java.util.Scanner;\n\npublic class W07_P3 {\n    public static boolean isPrime(int n) {\n        if (n <= 1) return false;\n        for (int i = 2; i * i <= n; i++) {\n            if (n % i == 0) return false;\n        }\n        return true;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int start = sc.nextInt();\n        int end = sc.nextInt();\n        int sum = 0;\n        for (int i = start; i <= end; i++) {\n            if (isPrime(i)) sum += i;\n        }\n        System.out.println(sum);\n    }\n}"
  },
  {
    "id": "W07_P04",
    "week": 7,
    "num": 4,
    "title": "Multithreading - Even and Odd Number Printer",
    "problem": "Create two threads: one prints even numbers and the other prints odd numbers.",
    "testCase": "Output: Multithreaded execution runs without crashing",
    "templateCode": "public class W07_P4 {\n    /* >>> [PUT THREAD CREATION AND START CODE HERE] <<< */\n}",
    "studentCode": "Thread t1 = new Thread(() -> {\n    for (int i = 2; i <= 10; i += 2) System.out.print(i + \" \");\n});\nThread t2 = new Thread(() -> {\n    for (int i = 1; i <= 9; i += 2) System.out.print(i + \" \");\n});\nt1.start();\nt2.start();",
    "question": "Which code snippet correctly spawns and starts both threads in Java?",
    "options": [
      "Thread t1 = new Thread(() -> { /* even logic */ });\nThread t2 = new Thread(() -> { /* odd logic */ });\nt1.start();\nt2.start();",
      "Thread t1 = new Thread();\nt1.run();\nThread t2 = new Thread();\nt2.run();",
      "Thread t1 = Thread.start();\nThread t2 = Thread.start();",
      "Runnable r1 = new Runnable();\nr1.start();"
    ],
    "correctIndex": 0,
    "explanation": "Calling `t.start()` creates a new OS-level execution thread and invokes `run()` asynchronously. Calling `t.run()` executes synchronously in the caller's thread.",
    "fullCode": "public class W07_P4 {\n    public static void main(String[] args) {\n        Thread t1 = new Thread(() -> {\n            for (int i = 2; i <= 10; i += 2) System.out.print(i + \" \");\n        });\n        Thread t2 = new Thread(() -> {\n            for (int i = 1; i <= 9; i += 2) System.out.print(i + \" \");\n        });\n        t1.start();\n        t2.start();\n    }\n}"
  },
  {
    "id": "W07_P05",
    "week": 7,
    "num": 5,
    "title": "Password Validator",
    "problem": "Validate password: minimum 8 characters, at least one uppercase, one lowercase, and one digit.",
    "testCase": "Input: Pass1234\nExpected Output: Valid",
    "templateCode": "import java.util.Scanner;\n\npublic class W07_P5 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String p = sc.nextLine();\n\n        /* >>> [PUT VALIDATION LOGIC HERE] <<< */\n\n    }\n}",
    "studentCode": "boolean valid = p.length() >= 8 &&\n    p.matches(\".*[A-Z].*\") &&\n    p.matches(\".*[a-z].*\") &&\n    p.matches(\".*[0-9].*\");\nif (valid) System.out.println(\"Valid\");\nelse System.out.println(\"Invalid\");",
    "question": "Which condition correctly verifies length >= 8, uppercase, lowercase, and digit?",
    "options": [
      "boolean valid = p.length() >= 8 && p.matches(\".*[A-Z].*\") && p.matches(\".*[a-z].*\") && p.matches(\".*[0-9].*\");",
      "boolean valid = p.length() == 8 && p.contains(\"A\") && p.contains(\"1\");",
      "boolean valid = p.length() > 8 || p.matches(\"[A-Z0-9]\");",
      "boolean valid = p.equalsIgnoreCase(\"Password\");"
    ],
    "correctIndex": 0,
    "explanation": "Regular expression `.*[A-Z].*` matches any string containing at least one uppercase letter; similarly for `[a-z]` and `[0-9]`, combined with length check.",
    "fullCode": "import java.util.Scanner;\n\npublic class W07_P5 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String p = sc.nextLine();\n        boolean valid = p.length() >= 8 &&\n            p.matches(\".*[A-Z].*\") &&\n            p.matches(\".*[a-z].*\") &&\n            p.matches(\".*[0-9].*\");\n        if (valid) System.out.println(\"Valid\");\n        else System.out.println(\"Invalid\");\n    }\n}"
  },
  {
    "id": "W08_P01",
    "week": 8,
    "num": 1,
    "title": "Creating a Thread Using Thread Class",
    "problem": "Create a thread class by extending Thread and override its run() method.",
    "testCase": "Output: Thread is running",
    "templateCode": "public class W08_P1 {\n    /* >>> [PUT THREAD SUBCLASS AND LAUNCH HERE] <<< */\n}",
    "studentCode": "static class MyThread extends Thread {\n    public void run() {\n        System.out.println(\"Thread is running\");\n    }\n}\npublic static void main(String[] args) {\n    MyThread t = new MyThread();\n    t.start();\n}",
    "question": "Which code snippet correctly creates and executes a thread by extending Thread?",
    "options": [
      "static class MyThread extends Thread {\n    public void run() { System.out.println(\"Thread is running\"); }\n}\npublic static void main(String[] args) {\n    MyThread t = new MyThread();\n    t.start();\n}",
      "static class MyThread implements Thread {\n    public void start() { System.out.println(\"Thread is running\"); }\n}",
      "static class MyThread extends Thread {\n    public void main() { System.out.println(\"Thread is running\"); }\n}",
      "class MyThread {\n    public void run() { System.out.println(\"Thread is running\"); }\n}"
    ],
    "correctIndex": 0,
    "explanation": "`Thread` is a class (not an interface), so it is extended via `extends Thread`. The entry point method must be `public void run()`, and it is launched via `t.start()`.",
    "fullCode": "public class W08_P1 {\n    static class MyThread extends Thread {\n        public void run() {\n            System.out.println(\"Thread is running\");\n        }\n    }\n    public static void main(String[] args) {\n        MyThread t = new MyThread();\n        t.start();\n    }\n}"
  },
  {
    "id": "W08_P02",
    "week": 8,
    "num": 2,
    "title": "Creating a Thread Using Runnable Interface",
    "problem": "Implement Runnable interface and pass it to a Thread instance to start execution.",
    "testCase": "Output: Runnable thread is running",
    "templateCode": "public class W08_P2 {\n    /* >>> [PUT RUNNABLE CLASS AND LAUNCH HERE] <<< */\n}",
    "studentCode": "static class MyRunnable implements Runnable {\n    public void run() {\n        System.out.println(\"Runnable thread is running\");\n    }\n}\npublic static void main(String[] args) {\n    Thread t = new Thread(new MyRunnable());\n    t.start();\n}",
    "question": "Which code snippet correctly implements Runnable and starts the thread?",
    "options": [
      "static class MyRunnable implements Runnable {\n    public void run() { System.out.println(\"Runnable thread is running\"); }\n}\npublic static void main(String[] args) {\n    Thread t = new Thread(new MyRunnable());\n    t.start();\n}",
      "static class MyRunnable extends Runnable {\n    public void run() {}\n}",
      "static class MyRunnable implements Runnable {\n    public void start() {}\n}",
      "public static void main(String[] args) {\n    Runnable r = new Runnable();\n    r.start();\n}"
    ],
    "correctIndex": 0,
    "explanation": "`Runnable` is a functional interface with single method `run()`. The instance is passed to `new Thread(runnable)` and started with `t.start()`.",
    "fullCode": "public class W08_P2 {\n    static class MyRunnable implements Runnable {\n        public void run() {\n            System.out.println(\"Runnable thread is running\");\n        }\n    }\n    public static void main(String[] args) {\n        Thread t = new Thread(new MyRunnable());\n        t.start();\n    }\n}"
  },
  {
    "id": "W08_P03",
    "week": 8,
    "num": 3,
    "title": "Understanding Thread States in Java",
    "problem": "Demonstrate the thread states: NEW, RUNNABLE, and TERMINATED.",
    "testCase": "Output: NEW\nRUNNABLE",
    "templateCode": "public class W08_P3 {\n    public static void main(String[] args) {\n        Thread t = new Thread(() -> {});\n\n        /* >>> [PRINT THREAD STATE HERE] <<< */\n\n        t.start();\n        System.out.println(t.getState());\n    }\n}",
    "studentCode": "System.out.println(t.getState());",
    "question": "Which method returns the current state of a thread as an enum of type Thread.State?",
    "options": [
      "t.getState()",
      "t.getStatus()",
      "t.threadState()",
      "Thread.getState(t)"
    ],
    "correctIndex": 0,
    "explanation": "`Thread.getState()` returns an enum constant of type `Thread.State` (e.g. `NEW`, `RUNNABLE`, `BLOCKED`, `WAITING`, `TIMED_WAITING`, `TERMINATED`).",
    "fullCode": "public class W08_P3 {\n    public static void main(String[] args) {\n        Thread t = new Thread(() -> {});\n        System.out.println(t.getState());\n        t.start();\n        System.out.println(t.getState());\n    }\n}"
  },
  {
    "id": "W08_P04",
    "week": 8,
    "num": 4,
    "title": "Understanding Thread Priority in Java",
    "problem": "Set thread priority to maximum using Thread.MAX_PRIORITY (10) and verify with getPriority().",
    "testCase": "Output: 10",
    "templateCode": "public class W08_P4 {\n    public static void main(String[] args) {\n        Thread t = new Thread();\n\n        /* >>> [PUT SETPRIORITY CODE HERE] <<< */\n\n        System.out.println(t.getPriority());\n    }\n}",
    "studentCode": "t.setPriority(Thread.MAX_PRIORITY);",
    "question": "Which statement sets the priority of a thread to the maximum value?",
    "options": [
      "t.setPriority(Thread.MAX_PRIORITY);",
      "t.priority = 10;",
      "t.setPriority(100);",
      "Thread.setPriority(t, 10);"
    ],
    "correctIndex": 0,
    "explanation": "Priorities in Java range from `Thread.MIN_PRIORITY` (1) to `Thread.MAX_PRIORITY` (10). Setting an invalid priority outside [1, 10] throws `IllegalArgumentException`.",
    "fullCode": "public class W08_P4 {\n    public static void main(String[] args) {\n        Thread t = new Thread();\n        t.setPriority(Thread.MAX_PRIORITY);\n        System.out.println(t.getPriority());\n    }\n}"
  },
  {
    "id": "W08_P05",
    "week": 8,
    "num": 5,
    "title": "Thread Synchronization",
    "problem": "Ensure thread-safe increments of a counter across concurrent threads using the synchronized keyword.",
    "testCase": "Output: Safe concurrent increment without race conditions",
    "templateCode": "class Counter {\n    int count = 0;\n\n    /* >>> [PUT SYNCHRONIZED METHOD HERE] <<< */\n}",
    "studentCode": "public synchronized void increment() {\n    count++;\n}",
    "question": "Which method declaration prevents race conditions on counter increment?",
    "options": [
      "public synchronized void increment() { count++; }",
      "public static void increment() { count++; }",
      "public volatile void increment() { count++; }",
      "public void increment() { lock count++; }"
    ],
    "correctIndex": 0,
    "explanation": "The `synchronized` keyword acquires the intrinsic monitor lock on the object before executing the method, ensuring mutually exclusive execution.",
    "fullCode": "class Counter {\n    int count = 0;\n    public synchronized void increment() {\n        count++;\n    }\n}"
  },
  {
    "id": "W09_P01",
    "week": 9,
    "num": 1,
    "title": "2D Flip-Flop Array (5x5)",
    "problem": "Read a 5x5 binary matrix (0s and 1s) and flip each element: turn 0 to 1 and 1 to 0.",
    "testCase": "Input: 5x5 array of 0s and 1s\nExpected Output: Flipped 5x5 array",
    "templateCode": "import java.util.Scanner;\n\npublic class W09_P1 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int[][] arr = new int[5][5];\n        for (int i = 0; i < 5; i++) {\n            for (int j = 0; j < 5; j++) {\n                arr[i][j] = sc.nextInt();\n                /* >>> [FLIP ELEMENT HERE] <<< */\n            }\n        }\n        for (int i = 0; i < 5; i++) {\n            for (int j = 0; j < 5; j++) System.out.print(arr[i][j]);\n            System.out.println();\n        }\n    }\n}",
    "studentCode": "arr[i][j] = (arr[i][j] == 0) ? 1 : 0;",
    "question": "Which expression flips a binary value between 0 and 1?",
    "options": [
      "arr[i][j] = (arr[i][j] == 0) ? 1 : 0;",
      "arr[i][j] = 1 - arr[i][j];",
      "arr[i][j] = arr[i][j] ^ 1;",
      "All of the above"
    ],
    "correctIndex": 3,
    "explanation": "All three formulas correctly flip 0 to 1 and 1 to 0: ternary conditional, `1 - x`, and bitwise XOR with 1 (`x ^ 1`).",
    "fullCode": "import java.util.Scanner;\n\npublic class W09_P1 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int[][] arr = new int[5][5];\n        for (int i = 0; i < 5; i++) {\n            for (int j = 0; j < 5; j++) {\n                arr[i][j] = sc.nextInt();\n                arr[i][j] = (arr[i][j] == 0) ? 1 : 0;\n            }\n        }\n        for (int i = 0; i < 5; i++) {\n            for (int j = 0; j < 5; j++) System.out.print(arr[i][j]);\n            System.out.println();\n        }\n    }\n}"
  },
  {
    "id": "W09_P02",
    "week": 9,
    "num": 2,
    "title": "Basic Calculator String Parser",
    "problem": "Evaluate simple arithmetic expression string with two integers and an operator (+, -, *, /).",
    "testCase": "Input: 15 + 25\nExpected Output: 40",
    "templateCode": "import java.util.Scanner;\n\npublic class W09_P2 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        char op = sc.next().charAt(0);\n        int b = sc.nextInt();\n\n        /* >>> [PUT SWITCH-CASE CALCULATION HERE] <<< */\n\n    }\n}",
    "studentCode": "int res = 0;\nswitch(op) {\n    case '+': res = a + b; break;\n    case '-': res = a - b; break;\n    case '*': res = a * b; break;\n    case '/': res = a / b; break;\n}\nSystem.out.println(res);",
    "question": "Which switch statement correctly computes the result based on operator op?",
    "options": [
      "int res = 0;\nswitch(op) {\n    case '+': res = a + b; break;\n    case '-': res = a - b; break;\n    case '*': res = a * b; break;\n    case '/': res = a / b; break;\n}\nSystem.out.println(res);",
      "switch(op) {\n    case +: return a + b;\n    case -: return a - b;\n}",
      "int res = a op b;",
      "if (op == \"+\") res = a + b;"
    ],
    "correctIndex": 0,
    "explanation": "Characters in Java switch statements must be enclosed in single quotes `' '` and `break` prevents fall-through.",
    "fullCode": "import java.util.Scanner;\n\npublic class W09_P2 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        char op = sc.next().charAt(0);\n        int b = sc.nextInt();\n        int res = 0;\n        switch(op) {\n            case '+': res = a + b; break;\n            case '-': res = a - b; break;\n            case '*': res = a * b; break;\n            case '/': res = a / b; break;\n        }\n        System.out.println(res);\n    }\n}"
  },
  {
    "id": "W09_P03",
    "week": 9,
    "num": 3,
    "title": "Multithreaded Square Calculation",
    "problem": "Calculate squares of numbers between begin and end in a separate thread.",
    "testCase": "Input: 1 5\nExpected Output: 1 4 9 16 25",
    "templateCode": "class SquareThread extends Thread {\n    private int begin, end;\n    public SquareThread(int begin, int end) {\n        this.begin = begin;\n        this.end = end;\n    }\n\n    /* >>> [PUT RUN METHOD HERE] <<< */\n}",
    "studentCode": "public void run() {\n    for (int i = begin; i <= end; i++) {\n        System.out.print((i * i) + \" \");\n    }\n}",
    "question": "Which run() method correctly prints the squares of all numbers in [begin, end]?",
    "options": [
      "public void run() {\n    for (int i = begin; i <= end; i++) System.out.print((i * i) + \" \");\n}",
      "public void start() {\n    for (int i = begin; i <= end; i++) System.out.print((i * i) + \" \");\n}",
      "public int run() {\n    return begin * end;\n}",
      "void run() {\n    System.out.print(Math.sqrt(begin));\n}"
    ],
    "correctIndex": 0,
    "explanation": "Thread task logic must be placed inside `public void run()`. Overriding `start()` does not launch a new thread.",
    "fullCode": "class SquareThread extends Thread {\n    private int begin, end;\n    public SquareThread(int begin, int end) {\n        this.begin = begin;\n        this.end = end;\n    }\n    public void run() {\n        for (int i = begin; i <= end; i++) {\n            System.out.print((i * i) + \" \");\n        }\n    }\n}"
  },
  {
    "id": "W09_P04",
    "week": 9,
    "num": 4,
    "title": "Exception Handling on Number Input",
    "problem": "Read number using BufferedReader. Catch NumberFormatException if user does not enter a valid integer.",
    "testCase": "Input: invalid\nExpected Output: Invalid input",
    "templateCode": "import java.io.*;\n\nclass W09_P4 {\n    public static void main(String[] args) {\n        try {\n            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n            String str = br.readLine();\n\n            /* >>> [PUT PARSE AND EXCEPTION HANDLING HERE] <<< */\n\n        } catch (IOException e) {}\n    }\n}",
    "studentCode": "try {\n    int n = Integer.parseInt(str);\n    System.out.println(n * n);\n} catch (NumberFormatException e) {\n    System.out.println(\"Invalid input\");\n}",
    "question": "Which exception is thrown when Integer.parseInt() fails to convert a String into an int?",
    "options": [
      "NumberFormatException",
      "InputMismatchException",
      "ArithmeticException",
      "NullPointerException"
    ],
    "correctIndex": 0,
    "explanation": "`Integer.parseInt(s)` throws `java.lang.NumberFormatException` when the string does not contain a parsable integer.",
    "fullCode": "import java.io.*;\n\nclass W09_P4 {\n    public static void main(String[] args) {\n        try {\n            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n            String str = br.readLine();\n            try {\n                int n = Integer.parseInt(str);\n                System.out.println(n * n);\n            } catch (NumberFormatException e) {\n                System.out.println(\"Invalid input\");\n            }\n        } catch (IOException e) {}\n    }\n}"
  },
  {
    "id": "W09_P05",
    "week": 9,
    "num": 5,
    "title": "Point Class and Euclidean Distance",
    "problem": "Calculate the Euclidean distance between two points (x1, y1) and (x2, y2): d = sqrt((x2 - x1)^2 + (y2 - y1)^2).",
    "testCase": "Input: 0 0 3 4\nExpected Output: Distance is: 5.0",
    "templateCode": "import java.util.Scanner;\n\nclass Point {\n    double x, y;\n    Point(double x, double y) {\n        this.x = x;\n        this.y = y;\n    }\n}\n\npublic class W09_P5 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Point p1 = new Point(sc.nextDouble(), sc.nextDouble());\n        Point p2 = new Point(sc.nextDouble(), sc.nextDouble());\n\n        /* >>> [PUT EUCLIDEAN DISTANCE CODE HERE] <<< */\n\n        System.out.printf(\"Distance is: %.1f\", dist);\n    }\n}",
    "studentCode": "double dist = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));",
    "question": "Which statement correctly calculates Euclidean distance between points p1 and p2?",
    "options": [
      "double dist = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));",
      "double dist = Math.sqrt((p2.x - p1.x)^2 + (p2.y - p1.y)^2);",
      "double dist = (p2.x - p1.x) + (p2.y - p1.y);",
      "double dist = Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2);"
    ],
    "correctIndex": 0,
    "explanation": "Formula: $\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ using `Math.sqrt()` and `Math.pow(..., 2)`.",
    "fullCode": "import java.util.Scanner;\n\nclass Point {\n    double x, y;\n    Point(double x, double y) {\n        this.x = x;\n        this.y = y;\n    }\n}\n\npublic class W09_P5 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Point p1 = new Point(sc.nextDouble(), sc.nextDouble());\n        Point p2 = new Point(sc.nextDouble(), sc.nextDouble());\n        double dist = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));\n        System.out.printf(\"Distance is: %.1f\", dist);\n    }\n}"
  },
  {
    "id": "W10_P01",
    "week": 10,
    "num": 1,
    "title": "Introduction to JDBC Imports",
    "problem": "Write the JDBC import package necessary to resolve Connection, Statement, and DriverManager.",
    "testCase": "Output: Compilation succeeds",
    "templateCode": "/* >>> [PUT IMPORT STATEMENT HERE] <<< */\n\npublic class W10_P1 {\n    public static void main(String[] args) {\n        System.out.println(\"JDBC package imported\");\n    }\n}",
    "studentCode": "import java.sql.*;",
    "question": "Which import statement imports all standard JDBC database interfaces and classes?",
    "options": [
      "import java.sql.*;",
      "import java.jdbc.*;",
      "import javax.sql.Connection;",
      "import java.database.*;"
    ],
    "correctIndex": 0,
    "explanation": "Core JDBC interfaces and classes are in package `java.sql`.",
    "fullCode": "import java.sql.*;\n\npublic class W10_P1 {\n    public static void main(String[] args) {\n        System.out.println(\"JDBC package imported\");\n    }\n}"
  },
  {
    "id": "W10_P02",
    "week": 10,
    "num": 2,
    "title": "Writing a JDBC Connection String for SQLite",
    "problem": "Write a valid JDBC URL string to connect to a SQLite database file named 'test.db'.",
    "testCase": "Output: connection string ready",
    "templateCode": "public class W10_P2 {\n    public static void main(String[] args) {\n        /* >>> [DEFINE URL STRING HERE] <<< */\n\n        if (url.equals(\"jdbc:sqlite:test.db\")) {\n            System.out.println(\"connection string ready\");\n        } else {\n            System.out.println(\"incorrect connection string\");\n        }\n    }\n}",
    "studentCode": "String url = \"jdbc:sqlite:test.db\";",
    "question": "Which string defines the correct JDBC connection URL for SQLite?",
    "options": [
      "String url = \"jdbc:sqlite:test.db\";",
      "String url = \"sqlite://localhost/test.db\";",
      "String url = \"jdbc:mysql://localhost:test.db\";",
      "String url = \"connect:sqlite:test.db\";"
    ],
    "correctIndex": 0,
    "explanation": "SQLite JDBC URL protocol format is `jdbc:sqlite:<filepath>`.",
    "fullCode": "public class W10_P2 {\n    public static void main(String[] args) {\n        String url = \"jdbc:sqlite:test.db\";\n        if (url.equals(\"jdbc:sqlite:test.db\")) {\n            System.out.println(\"connection string ready\");\n        } else {\n            System.out.println(\"incorrect connection string\");\n        }\n    }\n}"
  },
  {
    "id": "W10_P03",
    "week": 10,
    "num": 3,
    "title": "Writing a Simple SQL INSERT Statement",
    "problem": "Write a SQL INSERT statement as a string to insert a student with id 1 and name 'Alice' into table students.",
    "testCase": "Output: insert statement ready",
    "templateCode": "public class W10_P3 {\n    public static void main(String[] args) {\n        /* >>> [DEFINE SQL INSERT STRING HERE] <<< */\n\n        if (sql.equals(\"INSERT INTO students (id, name) VALUES (1, 'Alice');\")) {\n            System.out.println(\"insert statement ready\");\n        } else {\n            System.out.println(\"incorrect statement\");\n        }\n    }\n}",
    "studentCode": "String sql = \"INSERT INTO students (id, name) VALUES (1, 'Alice');\";",
    "question": "Which SQL statement string correctly inserts values into table students?",
    "options": [
      "String sql = \"INSERT INTO students (id, name) VALUES (1, 'Alice');\";",
      "String sql = \"ADD INTO students (id, name) VALUES (1, 'Alice');\";",
      "String sql = \"INSERT VALUES (1, 'Alice') INTO students;\";",
      "String sql = \"PUT INTO students VALUES (1, 'Alice');\";"
    ],
    "correctIndex": 0,
    "explanation": "Standard SQL syntax: `INSERT INTO table_name (columns) VALUES (values);`.",
    "fullCode": "public class W10_P3 {\n    public static void main(String[] args) {\n        String sql = \"INSERT INTO students (id, name) VALUES (1, 'Alice');\";\n        if (sql.equals(\"INSERT INTO students (id, name) VALUES (1, 'Alice');\")) {\n            System.out.println(\"insert statement ready\");\n        } else {\n            System.out.println(\"incorrect statement\");\n        }\n    }\n}"
  },
  {
    "id": "W10_P04",
    "week": 10,
    "num": 4,
    "title": "Writing a Simple SQL SELECT Statement",
    "problem": "Write a SQL SELECT query string to retrieve all rows and columns from table students.",
    "testCase": "Output: select statement ready",
    "templateCode": "public class W10_P4 {\n    public static void main(String[] args) {\n        /* >>> [DEFINE SQL SELECT STRING HERE] <<< */\n\n        if (sql.equals(\"SELECT * FROM students;\")) {\n            System.out.println(\"select statement ready\");\n        } else {\n            System.out.println(\"incorrect statement\");\n        }\n    }\n}",
    "studentCode": "String sql = \"SELECT * FROM students;\";",
    "question": "Which SQL statement string fetches all rows and columns from table students?",
    "options": [
      "String sql = \"SELECT * FROM students;\";",
      "String sql = \"GET * FROM students;\";",
      "String sql = \"FIND ALL IN students;\";",
      "String sql = \"FETCH students.*;\";"
    ],
    "correctIndex": 0,
    "explanation": "`SELECT * FROM students;` is standard SQL syntax to retrieve all records.",
    "fullCode": "public class W10_P4 {\n    public static void main(String[] args) {\n        String sql = \"SELECT * FROM students;\";\n        if (sql.equals(\"SELECT * FROM students;\")) {\n            System.out.println(\"select statement ready\");\n        } else {\n            System.out.println(\"incorrect statement\");\n        }\n    }\n}"
  },
  {
    "id": "W10_P05",
    "week": 10,
    "num": 5,
    "title": "Writing a Simple SQL UPDATE Statement",
    "problem": "Write a SQL UPDATE statement to set name to 'Bob' for the student with id 1.",
    "testCase": "Output: update statement ready",
    "templateCode": "public class W10_P5 {\n    public static void main(String[] args) {\n        /* >>> [DEFINE SQL UPDATE STRING HERE] <<< */\n\n        if (sql.equals(\"UPDATE students SET name = 'Bob' WHERE id = 1;\")) {\n            System.out.println(\"update statement ready\");\n        } else {\n            System.out.println(\"incorrect statement\");\n        }\n    }\n}",
    "studentCode": "String sql = \"UPDATE students SET name = 'Bob' WHERE id = 1;\";",
    "question": "Which SQL statement correctly updates student record with id 1?",
    "options": [
      "String sql = \"UPDATE students SET name = 'Bob' WHERE id = 1;\";",
      "String sql = \"CHANGE students SET name = 'Bob' WHERE id = 1;\";",
      "String sql = \"MODIFY students SET name = 'Bob' WHERE id = 1;\";",
      "String sql = \"UPDATE students VALUES name = 'Bob' WHERE id = 1;\";"
    ],
    "correctIndex": 0,
    "explanation": "SQL syntax: `UPDATE table_name SET column_name = value WHERE condition;`.",
    "fullCode": "public class W10_P5 {\n    public static void main(String[] args) {\n        String sql = \"UPDATE students SET name = 'Bob' WHERE id = 1;\";\n        if (sql.equals(\"UPDATE students SET name = 'Bob' WHERE id = 1;\")) {\n            System.out.println(\"update statement ready\");\n        } else {\n            System.out.println(\"incorrect statement\");\n        }\n    }\n}"
  },
  {
    "id": "W11_P01",
    "week": 11,
    "num": 1,
    "title": "JDBC Package Import",
    "problem": "Write the appropriate import statement to import the JDBC package(s) so that Connection, Statement, and DriverManager can be resolved.",
    "testCase": "Input: 1\nExpected Output: truetrue",
    "templateCode": "import java.util.Scanner;\n/* >>> [PUT YOUR CODE BELOW] <<< */\n\npublic class W11_P1 {\n    public static void main(String args[]) {\n        try {\n            Connection conn = null;\n            Statement stmt = null;\n            String DB_URL = \"jdbc:sqlite:/tempfs/db\";\n            System.setProperty(\"org.sqlite.tmpdir\", \"/tempfs\");\n\n            conn = DriverManager.getConnection(DB_URL);\n            System.out.print(conn.isValid(1));\n\n            Scanner sc = new Scanner(System.in);\n            int s = sc.nextInt();\n            if (s == 1) {\n                System.out.print(conn.isValid(1));\n            }\n            conn.close();\n        } catch (Exception e) {\n            System.out.println(e);\n        }\n    }\n}",
    "studentCode": "import java.sql.*;",
    "question": "Which import statement imports all core JDBC interfaces and classes including Connection, Statement, and DriverManager?",
    "options": [
      "import java.sql.*;",
      "import java.jdbc.*;",
      "import javax.sql.DriverManager;",
      "import java.database.sql.*;"
    ],
    "correctIndex": 0,
    "explanation": "All core JDBC classes (`Connection`, `Statement`, `DriverManager`, `ResultSet`) reside in package `java.sql`.",
    "fullCode": "import java.util.Scanner;\nimport java.sql.*;\n\npublic class W11_P1 {\n    public static void main(String args[]) {\n        try {\n            Connection conn = null;\n            Statement stmt = null;\n            String DB_URL = \"jdbc:sqlite:/tempfs/db\";\n            System.setProperty(\"org.sqlite.tmpdir\", \"/tempfs\");\n\n            conn = DriverManager.getConnection(DB_URL);\n            System.out.print(conn.isValid(1));\n\n            Scanner sc = new Scanner(System.in);\n            int s = sc.nextInt();\n            if (s == 1) {\n                System.out.print(conn.isValid(1));\n            }\n            conn.close();\n        } catch (Exception e) {\n            System.out.println(e);\n        }\n    }\n}"
  },
  {
    "id": "W11_P02",
    "week": 11,
    "num": 2,
    "title": "Create Connection and Check Validity",
    "problem": "Write JDBC code to create a Connection interface using DriverManager and DB_URL. Check whether the connection is valid with timeout 1 second.",
    "testCase": "Input: 7\nExpected Output: truefalse",
    "templateCode": "import java.sql.*;\nimport java.util.Scanner;\n\npublic class W11_P2 {\n    public static void main(String args[]) {\n        try {\n            Connection conn = null;\n            Statement stmt = null;\n            String DB_URL = \"jdbc:sqlite:/tempfs/db\";\n            System.setProperty(\"org.sqlite.tmpdir\", \"/tempfs\");\n\n            /* >>> [PUT YOUR CODE BELOW] <<< */\n\n            Scanner sc = new Scanner(System.in);\n            int s = sc.nextInt();\n            if (s == 7) {\n                conn.close();\n                System.out.print(false);\n            }\n            conn.close();\n        } catch (Exception e) {\n            System.out.println(e);\n        }\n    }\n}",
    "studentCode": "conn = DriverManager.getConnection(DB_URL);\nSystem.out.print(conn.isValid(1));",
    "question": "Which code snippet correctly initializes the Connection and checks its validity with timeout 1?",
    "options": [
      "conn = DriverManager.getConnection(DB_URL);\nSystem.out.print(conn.isValid(1));",
      "conn = new Connection(DB_URL);\nSystem.out.print(conn.isValid(1));",
      "conn = DriverManager.connect(DB_URL);\nSystem.out.print(conn.isValid());",
      "conn = Driver.getConnection(DB_URL);\nSystem.out.print(conn.isAlive(1));"
    ],
    "correctIndex": 0,
    "explanation": "`DriverManager.getConnection(url)` obtains the database connection. `conn.isValid(1)` verifies if it is alive.",
    "fullCode": "import java.sql.*;\nimport java.util.Scanner;\n\npublic class W11_P2 {\n    public static void main(String args[]) {\n        try {\n            Connection conn = null;\n            Statement stmt = null;\n            String DB_URL = \"jdbc:sqlite:/tempfs/db\";\n            System.setProperty(\"org.sqlite.tmpdir\", \"/tempfs\");\n\n            conn = DriverManager.getConnection(DB_URL);\n            System.out.print(conn.isValid(1));\n\n            Scanner sc = new Scanner(System.in);\n            int s = sc.nextInt();\n            if (s == 7) {\n                conn.close();\n                System.out.print(false);\n            }\n            conn.close();\n        } catch (Exception e) {\n            System.out.println(e);\n        }\n    }\n}"
  },
  {
    "id": "W11_P03",
    "week": 11,
    "num": 3,
    "title": "Closing Connection and Checking State",
    "problem": "Create a database connection, immediately close it using conn.close(), and print whether it is closed using conn.isClosed().",
    "testCase": "Output: true",
    "templateCode": "import java.sql.*;\n\npublic class W11_P3 {\n    public static void main(String args[]) {\n        try {\n            Connection conn = null;\n            Statement stmt = null;\n            String DB_URL = \"jdbc:sqlite:/tempfs/db\";\n            System.setProperty(\"org.sqlite.tmpdir\", \"/tempfs\");\n\n            /* >>> [PUT YOUR CODE BELOW] <<< */\n\n        } catch (Exception e) {\n            System.out.println(e);\n        }\n    }\n}",
    "studentCode": "conn = DriverManager.getConnection(DB_URL);\nconn.close();\nSystem.out.print(conn.isClosed());",
    "question": "Which code sequence correctly connects, closes the connection, and outputs its closed status?",
    "options": [
      "conn = DriverManager.getConnection(DB_URL);\nconn.close();\nSystem.out.print(conn.isClosed());",
      "conn = DriverManager.getConnection(DB_URL);\nconn.disconnect();\nSystem.out.print(conn.isClosed());",
      "conn = DriverManager.getConnection(DB_URL);\nSystem.out.print(conn.close());",
      "conn = DriverManager.getConnection(DB_URL);\nconn.destroy();\nSystem.out.print(conn.status());"
    ],
    "correctIndex": 0,
    "explanation": "Call `conn.close()` to release the connection, and boolean method `conn.isClosed()` returns `true`.",
    "fullCode": "import java.sql.*;\n\npublic class W11_P3 {\n    public static void main(String args[]) {\n        try {\n            Connection conn = null;\n            Statement stmt = null;\n            String DB_URL = \"jdbc:sqlite:/tempfs/db\";\n            System.setProperty(\"org.sqlite.tmpdir\", \"/tempfs\");\n\n            conn = DriverManager.getConnection(DB_URL);\n            conn.close();\n            System.out.print(conn.isClosed());\n\n        } catch (Exception e) {\n            System.out.println(e);\n        }\n    }\n}"
  },
  {
    "id": "W11_P04",
    "week": 11,
    "num": 4,
    "title": "Create Table 'STUDENTS' in SQL Database",
    "problem": "Create a table named STUDENTS with fields UID INT, Name VARCHAR(45), Roll VARCHAR(12), Age INT using stmt.executeUpdate().",
    "testCase": "Output: true (Table created successfully)",
    "templateCode": "import java.sql.*;\n\npublic class W11_P4 {\n    public static void main(String args[]) {\n        try {\n            Connection conn = null;\n            Statement stmt = null;\n            String DB_URL = \"jdbc:sqlite:/tempfs/db\";\n            System.setProperty(\"org.sqlite.tmpdir\", \"/tempfs\");\n            conn = DriverManager.getConnection(DB_URL);\n            stmt = conn.createStatement();\n\n            /* >>> [PUT YOUR CODE BELOW] <<< */\n\n            ResultSet rs = stmt.executeQuery(\"SELECT * FROM STUDENTS;\");\n            System.out.print(rs.getMetaData().getColumnCount() == 4);\n            conn.close();\n        } catch (Exception e) {\n            System.out.println(e);\n        }\n    }\n}",
    "studentCode": "String sql = \"CREATE TABLE STUDENTS (UID INT, Name VARCHAR(45), Roll VARCHAR(12), Age INT);\";\nstmt.executeUpdate(sql);",
    "question": "Which SQL statement and execution method correctly creates the STUDENTS table?",
    "options": [
      "String sql = \"CREATE TABLE STUDENTS (UID INT, Name VARCHAR(45), Roll VARCHAR(12), Age INT);\";\nstmt.executeUpdate(sql);",
      "String sql = \"CREATE TABLE STUDENTS (UID INT, Name VARCHAR(45), Roll VARCHAR(12), Age INT);\";\nstmt.executeQuery(sql);",
      "String sql = \"MAKE TABLE STUDENTS (UID INT, Name VARCHAR(45), Roll VARCHAR(12), Age INT);\";\nstmt.executeUpdate(sql);",
      "String sql = \"CREATE TABLE STUDENTS (UID INT, Name VARCHAR(45), Roll VARCHAR(12), Age INT);\";\nconn.execute(sql);"
    ],
    "correctIndex": 0,
    "explanation": "DDL operations (`CREATE TABLE`) must be run with `stmt.executeUpdate(sql)` or `stmt.execute(sql)`.",
    "fullCode": "import java.sql.*;\n\npublic class W11_P4 {\n    public static void main(String args[]) {\n        try {\n            Connection conn = null;\n            Statement stmt = null;\n            String DB_URL = \"jdbc:sqlite:/tempfs/db\";\n            System.setProperty(\"org.sqlite.tmpdir\", \"/tempfs\");\n            conn = DriverManager.getConnection(DB_URL);\n            stmt = conn.createStatement();\n\n            String sql = \"CREATE TABLE STUDENTS (UID INT, Name VARCHAR(45), Roll VARCHAR(12), Age INT);\";\n            stmt.executeUpdate(sql);\n\n            ResultSet rs = stmt.executeQuery(\"SELECT * FROM STUDENTS;\");\n            System.out.print(rs.getMetaData().getColumnCount() == 4);\n            conn.close();\n        } catch (Exception e) {\n            System.out.println(e);\n        }\n    }\n}"
  },
  {
    "id": "W11_P05",
    "week": 11,
    "num": 5,
    "title": "Rename Table 'STUDENTS' to 'GRADUATES'",
    "problem": "Execute SQL statement to rename existing table STUDENTS to GRADUATES.",
    "testCase": "Output: true (Table successfully renamed)",
    "templateCode": "import java.sql.*;\n\npublic class W11_P5 {\n    public static void main(String args[]) {\n        try {\n            Connection conn = null;\n            Statement stmt = null;\n            String DB_URL = \"jdbc:sqlite:/tempfs/db\";\n            System.setProperty(\"org.sqlite.tmpdir\", \"/tempfs\");\n            conn = DriverManager.getConnection(DB_URL);\n            stmt = conn.createStatement();\n\n            /* >>> [PUT YOUR CODE BELOW] <<< */\n\n            ResultSet rs = stmt.executeQuery(\"SELECT * FROM GRADUATES;\");\n            System.out.print(rs != null);\n            conn.close();\n        } catch (Exception e) {\n            System.out.println(e);\n        }\n    }\n}",
    "studentCode": "String sql = \"ALTER TABLE STUDENTS RENAME TO GRADUATES;\";\nstmt.executeUpdate(sql);",
    "question": "Which SQL statement correctly renames the STUDENTS table to GRADUATES?",
    "options": [
      "String sql = \"ALTER TABLE STUDENTS RENAME TO GRADUATES;\";\nstmt.executeUpdate(sql);",
      "String sql = \"RENAME TABLE STUDENTS TO GRADUATES;\";\nstmt.executeUpdate(sql);",
      "String sql = \"ALTER TABLE STUDENTS MODIFY NAME GRADUATES;\";\nstmt.executeUpdate(sql);",
      "String sql = \"UPDATE TABLE STUDENTS TO GRADUATES;\";\nstmt.executeUpdate(sql);"
    ],
    "correctIndex": 0,
    "explanation": "Standard SQL DDL syntax to rename a table is `ALTER TABLE <old> RENAME TO <new>;`.",
    "fullCode": "import java.sql.*;\n\npublic class W11_P5 {\n    public static void main(String args[]) {\n        try {\n            Connection conn = null;\n            Statement stmt = null;\n            String DB_URL = \"jdbc:sqlite:/tempfs/db\";\n            System.setProperty(\"org.sqlite.tmpdir\", \"/tempfs\");\n            conn = DriverManager.getConnection(DB_URL);\n            stmt = conn.createStatement();\n\n            String sql = \"ALTER TABLE STUDENTS RENAME TO GRADUATES;\";\n            stmt.executeUpdate(sql);\n\n            ResultSet rs = stmt.executeQuery(\"SELECT * FROM GRADUATES;\");\n            System.out.print(rs != null);\n            conn.close();\n        } catch (Exception e) {\n            System.out.println(e);\n        }\n    }\n}"
  },
  {
    "id": "W12_P01",
    "week": 12,
    "num": 1,
    "title": "Parameterized Constructors in Java",
    "problem": "Create a class Student with parameterized constructor to initialize name and roll.",
    "testCase": "Input: Alice 101\nExpected Output: Name: Alice, Roll: 101",
    "templateCode": "import java.util.Scanner;\n\npublic class W12_P1 {\n    /* >>> [PUT STUDENT CLASS WITH PARAMETERIZED CONSTRUCTOR HERE] <<< */\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Student s = new Student(sc.next(), sc.nextInt());\n        System.out.println(\"Name: \" + s.name + \", Roll: \" + s.roll);\n    }\n}",
    "studentCode": "static class Student {\n    String name;\n    int roll;\n    Student(String name, int roll) {\n        this.name = name;\n        this.roll = roll;\n    }\n}",
    "question": "Which constructor properly assigns parameter values to instance fields using 'this'?",
    "options": [
      "static class Student {\n    String name; int roll;\n    Student(String name, int roll) {\n        this.name = name;\n        this.roll = roll;\n    }\n}",
      "static class Student {\n    String name; int roll;\n    void Student(String name, int roll) {\n        name = name;\n    }\n}",
      "static class Student {\n    Student() {}\n}",
      "class Student {\n    Student(name, roll) { this.name = name; }\n}"
    ],
    "correctIndex": 0,
    "explanation": "Parameterized constructors assign incoming arguments to instance fields using `this.<field> = <parameter>`.",
    "fullCode": "import java.util.Scanner;\n\npublic class W12_P1 {\n    static class Student {\n        String name;\n        int roll;\n        Student(String name, int roll) {\n            this.name = name;\n            this.roll = roll;\n        }\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Student s = new Student(sc.next(), sc.nextInt());\n        System.out.println(\"Name: \" + s.name + \", Roll: \" + s.roll);\n    }\n}"
  },
  {
    "id": "W12_P02",
    "week": 12,
    "num": 2,
    "title": "Method Overloading with Different Types",
    "problem": "Create Calculator class with overloaded add methods: add(int a, int b) and add(double a, double b).",
    "testCase": "Input: 2 3 2.5 3.5\nExpected Output:\n5\n6.0",
    "templateCode": "import java.util.Scanner;\n\npublic class W12_P2 {\n    /* >>> [PUT CALCULATOR CLASS HERE] <<< */\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Calculator c = new Calculator();\n        System.out.println(c.add(sc.nextInt(), sc.nextInt()));\n        System.out.println(c.add(sc.nextDouble(), sc.nextDouble()));\n    }\n}",
    "studentCode": "static class Calculator {\n    public int add(int a, int b) { return a + b; }\n    public double add(double a, double b) { return a + b; }\n}",
    "question": "Which class definition correctly overloads the add method based on parameter types?",
    "options": [
      "static class Calculator {\n    public int add(int a, int b) { return a + b; }\n    public double add(double a, double b) { return a + b; }\n}",
      "static class Calculator {\n    public int add(int a, int b) { return a + b; }\n    public double add(int a, int b) { return (double)(a + b); }\n}",
      "class Calculator {\n    int add(int a, int b) { return a; }\n}",
      "static class Calculator {\n    public double add(double a, int b) { return a; }\n}"
    ],
    "correctIndex": 0,
    "explanation": "Overloading can be based on different parameter types (`(int, int)` vs `(double, double)`).",
    "fullCode": "import java.util.Scanner;\n\npublic class W12_P2 {\n    static class Calculator {\n        public int add(int a, int b) { return a + b; }\n        public double add(double a, double b) { return a + b; }\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Calculator c = new Calculator();\n        System.out.println(c.add(sc.nextInt(), sc.nextInt()));\n        System.out.println(c.add(sc.nextDouble(), sc.nextDouble()));\n    }\n}"
  },
  {
    "id": "W12_P03",
    "week": 12,
    "num": 3,
    "title": "If-Else with Nested Conditions",
    "problem": "Read an integer. Print 'Positive' if > 0, 'Negative' if < 0, and 'Zero' if equal to 0.",
    "testCase": "Input: -5\nExpected Output: Negative",
    "templateCode": "import java.util.Scanner;\n\npublic class W12_P3 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num = sc.nextInt();\n\n        /* >>> [PUT IF-ELSE CONDITIONS HERE] <<< */\n\n    }\n}",
    "studentCode": "if (num > 0) {\n    System.out.println(\"Positive\");\n} else if (num < 0) {\n    System.out.println(\"Negative\");\n} else {\n    System.out.println(\"Zero\");\n}",
    "question": "Which conditional chain accurately classifies the number as Positive, Negative, or Zero?",
    "options": [
      "if (num > 0) {\n    System.out.println(\"Positive\");\n} else if (num < 0) {\n    System.out.println(\"Negative\");\n} else {\n    System.out.println(\"Zero\");\n}",
      "if (num > 0) System.out.println(\"Positive\");\nelse System.out.println(\"Negative\");",
      "if (num >= 0) System.out.println(\"Positive\");\nelse System.out.println(\"Zero\");",
      "switch(num) { case 1: System.out.println(\"Positive\"); }"
    ],
    "correctIndex": 0,
    "explanation": "Mutually exclusive branches using `if ... else if ... else` distinguish positive, negative, and zero.",
    "fullCode": "import java.util.Scanner;\n\npublic class W12_P3 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num = sc.nextInt();\n        if (num > 0) {\n            System.out.println(\"Positive\");\n        } else if (num < 0) {\n            System.out.println(\"Negative\");\n        } else {\n            System.out.println(\"Zero\");\n        }\n    }\n}"
  },
  {
    "id": "W12_P04",
    "week": 12,
    "num": 4,
    "title": "Loop to Calculate Sum of Natural Numbers",
    "problem": "Read an integer n and calculate the sum of the first n natural numbers (1 + 2 + ... + n).",
    "testCase": "Input: 5\nExpected Output: 15",
    "templateCode": "import java.util.Scanner;\n\npublic class W12_P4 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int sum = 0;\n\n        /* >>> [PUT LOOP HERE] <<< */\n\n        System.out.println(sum);\n    }\n}",
    "studentCode": "for (int i = 1; i <= n; i++) {\n    sum += i;\n}",
    "question": "Which loop correctly accumulates the sum of numbers from 1 up to n inclusive?",
    "options": [
      "for (int i = 1; i <= n; i++) {\n    sum += i;\n}",
      "for (int i = 0; i < n; i++) {\n    sum += i;\n}",
      "for (int i = 1; i <= n; i++) {\n    sum = i;\n}",
      "while (n > 0) {\n    sum = n * (n + 1);\n}"
    ],
    "correctIndex": 0,
    "explanation": "`for (int i = 1; i <= n; i++) sum += i;` iterates through 1 to `n`, accumulating each into `sum`.",
    "fullCode": "import java.util.Scanner;\n\npublic class W12_P4 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int sum = 0;\n        for (int i = 1; i <= n; i++) {\n            sum += i;\n        }\n        System.out.println(sum);\n    }\n}"
  },
  {
    "id": "W12_P05",
    "week": 12,
    "num": 5,
    "title": "Array Traversal and Condition Task",
    "problem": "Read n integers into an array. Sum only the even numbers and print the total.",
    "testCase": "Input: 4\n1 2 3 4\nExpected Output: 6",
    "templateCode": "import java.util.Scanner;\n\npublic class W12_P5 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n        int sum = 0;\n\n        /* >>> [PUT ARRAY TRAVERSAL & SUM HERE] <<< */\n\n        System.out.println(sum);\n    }\n}",
    "studentCode": "for (int i = 0; i < n; i++) {\n    if (arr[i] % 2 == 0) {\n        sum += arr[i];\n    }\n}",
    "question": "Which loop correctly iterates through the array and accumulates only even elements?",
    "options": [
      "for (int i = 0; i < n; i++) {\n    if (arr[i] % 2 == 0) sum += arr[i];\n}",
      "for (int i = 0; i <= n; i++) {\n    if (arr[i] % 2 == 0) sum += arr[i];\n}",
      "for (int i = 0; i < n; i++) {\n    if (i % 2 == 0) sum += arr[i];\n}",
      "for (int x : arr) {\n    if (x / 2 == 0) sum += x;\n}"
    ],
    "correctIndex": 0,
    "explanation": "Iterates from index 0 to `n-1`, testing if each value `arr[i] % 2 == 0`. Option B has an `ArrayIndexOutOfBoundsException` (`<= n`). Option C checks the index `i` rather than the element value `arr[i]`.",
    "fullCode": "import java.util.Scanner;\n\npublic class W12_P5 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n        int sum = 0;\n        for (int i = 0; i < n; i++) {\n            if (arr[i] % 2 == 0) {\n                sum += arr[i];\n            }\n        }\n        System.out.println(sum);\n    }\n}"
  }
];
