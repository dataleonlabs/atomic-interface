import React from 'react';
import { AutoSuggestProps as Props } from './props';
import { Autosuggest } from 'react-autosuggest';
import { FormGroup } from 'reactstrap';


class AppSuggest extends React.Component<Props> {

    escapeRegexCharacters = (str) => {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    getSuggestions = (value) => {
        const escapedValue = this.escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('^' + escapedValue, 'i');

        return this.props.suggesions
            .map(section => {
                return {
                    title: section.title,
                    languages: section.languages.filter(language => regex.test(language.name))
                };
            })
            .filter(section => section.languages.length > 0);
    }

    getSuggestionValue = (suggestion) => {
        return suggestion.name;
    }

    renderSuggestion(suggestion) {
        return (
            <span>{suggestion.name}</span>
        );
    }

    renderSectionTitle(section) {
        return (
            <strong>{section.title}</strong>
        );
    }

    getSectionSuggestions(section) {
        return section.languages;
    }

    state = {
        value: '',
        suggestions: []
    };


    public onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };

    public onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    public onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    public render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Type 'c'",
            value,
            onChange: this.onChange
        };

        return (
            <FormGroup>
                <Autosuggest
                    multiSection={true}
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    renderSectionTitle={this.renderSectionTitle}
                    getSectionSuggestions={this.getSectionSuggestions}
                    inputProps={inputProps} />
            </FormGroup>
        );
    }
}
export default AppSuggest