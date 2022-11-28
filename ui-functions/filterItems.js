export const filterItems = () => {
    let $filterBoxes = $('input[type="checkbox"]');
    $filterBoxes.on('change', function () {
        let selectedFilters = {};
        $filterBoxes.filter(':checked').each(function () {
            if (!selectedFilters.hasOwnProperty(this.name)) {
                selectedFilters[this.name] = [];
            }
            selectedFilters[this.name].push(this.value);
        });
        // create a collection containing all of potential divs to filter
        let $filteredResults = $('.card');
        // loop over the selected filter name -> (array) values pairs
        $.each(selectedFilters, function (name, filterValues) {
            // filter each .card
            $filteredResults = $filteredResults.filter(function () {
                let matched = false,
                    currentFilterValues = $(this).data('color').split(' ');
                // loop over each color value in the current .card's data-color
                $.each(currentFilterValues, function (_, currentFilterValue) {
                    // if the current color exists in the selected filters array
                    if ($.inArray(currentFilterValue, filterValues) != -1) {
                        matched = true;
                        return false;
                    }
                });
                // shows matches .card divs
                return matched;
            });
        });
        $('.card').hide().filter($filteredResults).show();
    });
}