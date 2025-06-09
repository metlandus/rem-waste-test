# Skip Selection Webpage

This project is a React-based webpage built with Vite by METE CIVELEK, designed to display a list of skips with their details in an accordion-style layout. The design and functionality aim to provide a user-friendly experience while maintaining responsiveness and smooth animations.

## Features

-   **List View Layout**:

    -   The skips are displayed in a list view instead of a grid view to differentiate from the original page, which was already in a grid format.
    -   Each list item is presented in an accordion form, allowing users to expand and view additional details.

-   **Accordion Dropdown**:

    -   The accordion dropdown reveals details and warnings about each skip.
    -   Key information such as the skip's name (length) and price is always visible without needing to expand the accordion.

-   **Dark Blue Theme**:

    -   The page features a dark blue theme for the background and primary elements.
    -   Buttons and price text are styled with vibrant colors corresponding to their context for better visibility and user interaction.

-   **Hover Effects and Smooth Transitions**:

    -   Buttons and cards include hover effects that change their colors dynamically.
    -   All animations, including hover effects, have smooth transitions for a polished user experience.

-   **Dynamic Data from API**:

    -   The skip data is fetched dynamically from the provided API, ensuring the information is always up-to-date.
    -   No hardcoded data is used for the skips.

-   **Placeholder Images**:

    -   Since the API does not provide photos of the skips, SVGs are used as placeholders for the images.

-   **Responsive Design**:

    -   The webpage is fully responsive and works seamlessly on devices with a width of 320px and above.
    -   Starting from 768px and above, the layout of each card is adjusted to make the design more visually appealing for mobile resolutions.

-   **Expandable Details**:
    -   Some details sections may appear empty due to limited information provided by the API, but they can easily be populated with additional data if available.

## Technologies Used

-   **React**: For building the user interface.
-   **Vite**: For fast development and build processes.
-   **TAILWINDCSS**: For styling, including hover effects, transitions, and responsive design.
-   **API Integration**: To fetch skip data dynamically.

## Project Link

https://rem-waste-test-eight.vercel.app/
