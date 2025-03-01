# MUNDO PC

## Este proyecto simula la gestión y administración de dispositivos de entrada y ordenadores. El sistema está compuesto por varios objetos que interactúan entre sí utilizando conceptos de herencia, agregación y contadores estáticos.


## Funcionalidades principales:
- Herencia: Utiliza herencia para definir clases específicas de dispositivos de entrada como ratón y teclado.
- Contadores estáticos: Cada clase (como Raton, Teclado, Monitor) usa un contador estático para asignar identificadores únicos a cada objeto creado.
- Agregación: La clase Ordenador utiliza agregación para incluir instancias de Raton, Teclado y Monitor.
- Método toString: Cada clase tiene su propio método toString para mostrar una representación legible de sus objetos.
- Gestión de órdenes: La clase Orden maneja múltiples ordenadores, permitiendo agregar ordenadores y mostrar una lista de los mismos.


## Clases principales:
### DispositivoEntrada: Es la clase base que representa los dispositivos de entrada comunes como ratón y teclado. Contiene atributos como tipoEntrada y marca, que son compartidos por sus subclases.

### Raton: Hereda de DispositivoEntrada y representa un ratón, con un contador estático que asigna un identificador único a cada instancia de esta clase. Además, tiene un método toString que devuelve una descripción del ratón.

### Teclado: Al igual que el ratón, hereda de DispositivoEntrada y representa un teclado, también con un contador estático para asignar un identificador único. La descripción del teclado también se obtiene mediante el método toString.

### Monitor: Esta clase no hereda de DispositivoEntrada, sino que se trata de una clase independiente. Representa un monitor con atributos como marca y tamaño. También tiene un contador estático para generar identificadores únicos para cada monitor.

### Ordenador: Representa un ordenador que está compuesto por un ratón, un teclado y un monitor. La relación entre estos componentes es de agregación, ya que un ordenador contiene instancias de las otras clases, pero no las hereda. La clase Ordenador también tiene un identificador único generado de manera estática.

### Orden: Representa una colección de ordenadores. Un objeto Orden puede contener varios ordenadores, y tiene métodos para agregar ordenadores y mostrar detalles de todos los ordenadores en la orden.
