import React from 'react';

interface Filter {
    name: string;
    value: string;
}

interface FilterSelectorProps {
    filters: Filter[];
    onFilterChange: (filter: Filter) => void;
}

class FilterSelector extends React.Component<FilterSelectorProps> {
    handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedFilter = this.props.filters.find(filter => filter.name === event.target.value);
        if (selectedFilter) {
            this.props.onFilterChange(selectedFilter);
        }
    };

    render() {
        return (
            <div className="filter-selector">
                <label htmlFor="filter-select">Select a filter:</label>
                <select id="filter-select" onChange={this.handleFilterChange}>
                    {this.props.filters.map(filter => (
                        <option key={filter.value} value={filter.name}>
                            {filter.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default FilterSelector;