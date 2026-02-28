```markdown
# AGENTS.md File Guidelines

These guidelines are designed to ensure the quality, maintainability, and efficiency of all AGENTS.md files within this repository. Adherence to these principles is crucial for a sustainable and robust development workflow.

## 1. DRY (Don't Repeat Yourself)

*   **Single Responsibility Principle:** Each agent component should have a single, well-defined purpose. Avoid creating overly complex agents with multiple responsibilities.
*   **Component Reusability:** Components should be designed to be reusable across multiple agents or projects.  Strive for abstraction where possible.
*   **Pattern Matching:** Utilize pattern matching extensively to reduce repetition in conditional logic.
*   **Avoid Duplicate Code:** Implement code once and reuse it.  Review and refactor existing code to eliminate redundancies.

## 2. KISS (Keep It Simple, Stupid)

*   **Simplicity:** Prioritize code simplicity and readability.  Avoid unnecessary complexity.
*   **Minimalism:**  Keep the codebase lean and focused on its core functionality.
*   **Clear Naming:**  Use descriptive and consistent naming conventions for variables, functions, and classes.
*   **Brief Functions:** Keep functions concise and focused on a single task.  Avoid long, sprawling functions.

## 3. SOLID Principles

*   **Single Responsibility Principle:**  As mentioned above, each class/component should have a single responsibility.
*   **Open/Closed Principle:**  The agent's code should be extensible through modification, not through inheritance (unless absolutely necessary).  Existing functionality should not be broken by new additions.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without affecting the correctness of the system.
*   **Interface Segregation Principle:**  Clients should not be forced to implement interfaces they do not use.
*   **Dependency Inversion Principle:**  High-level modules (like agents) should not depend on low-level modules.  They should depend on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   **Avoid Unnecessary Implementation:**  Don't implement features or functionality that are not currently needed.
*   **Focus on Requirements:**  Implement only what is explicitly required by the design specifications.
*   **Refactoring for Completeness:**  Refactor code to remove any potential future needs, rather than adding new functionality that isn’t required.

## 5. Code Length & Structure

*   **Maximum Code Length:** Each file must not exceed 180 lines of code.
*   **Code Formatting:**  Strict adherence to code formatting style (e.g., using a linter) is mandatory. Tooling will be utilized.
*   **Comments:**  Provide clear and concise comments to explain complex logic or non-obvious code decisions.
*   **Variable/Function Naming:** Use descriptive names that clearly indicate the purpose of variables and functions.
*   **Logical Structure:**  Organize code into logical modules with well-defined responsibilities.

## 6. Testing

*   **Only Mocking:** All tests *must* be written using mocks and stubs.  No real implementations are permitted.
*   **Test-Driven Development:** Follow a test-driven development methodology, writing tests *before* implementation.
*   **Comprehensive Test Suite:** Aim for 80% test coverage.  Coverage will be assessed and maintained through automated tests.
*   **Test Isolation:** Ensure tests are isolated and don't have unintended side effects.

## 7. File Structure & Organization

*   **Modular Design:** Organize agents into modules or components that are loosely coupled.
*   **Clear Directory Structure:** Maintain a consistent and well-organized directory structure.
*   **Documentation:** Include a README file documenting the purpose of each component and its interactions.

## 8.  Best Practices

*   **Error Handling:**  Implement robust error handling and logging to facilitate debugging and monitoring.
*   **Configuration Management:**  Utilize configuration files to manage agent settings and parameters.
*   **Version Control:**  Utilize a version control system (e.g., Git) for all code changes.

## 9.  Tools

*   **Linter:** Employ a linter (e.g., ESLint, Pylint) to enforce code style and identify potential errors.
*   **Code Formatters:** Use a code formatter (e.g., Prettier, Black) to ensure consistent code formatting.
*   **Coverage Tool:** Utilize a code coverage tool (e.g., Jest, Istanbul) to measure test coverage.

```