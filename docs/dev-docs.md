# Welcome on board! :raised_hands:
- [Project Structure](#project-structure)

## Project Structure

- [src](../src)
    - [service](../src/service) - service classes used by the app.
    - [model](../src/model) - common models used by the app.
    - [components](../src/components) - components.
    - [pages](../src/pages) - pages.


### Components
Components are located in the [components](../src/components) directory.

**No business logic from the UI layer**

In this project, we use MVVM architecture.
We delegate the business functionality to ViewModels rather than Views.

### Pages

Pages are located in the [pages](../src/pages) directory.

A page itself is divided into 3 parts: a Component (View), a VM (ViewModel), and a Controller:

- A Component is a UI representation of the model that should be displayed in this view.
- A VM is a mediator between the Component and the Model that is used on this screen.
A VM is responsible for performing data manipulations required for a proper displaying inside the Component.
- A Controller is a mediator between the Component and the VM. Generally, a Controller is used to create the VM.
