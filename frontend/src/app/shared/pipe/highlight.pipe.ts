import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {

  public transform(value: string|number, valueToSearch: string|number, highlightDistinctWord = false): string {
	let sanitizedValue = value ? value.toString() : '';

	if (valueToSearch) {
		const tokens = highlightDistinctWord ? valueToSearch.toString().split(/\s+/) : [valueToSearch.toString()];
		tokens.forEach(token => {
			sanitizedValue = this.highlightWordInString(sanitizedValue, token);
		});
	}

	return sanitizedValue;
  }

  private highlightWordInString(value: string, wordToSearch: string): string {
	const stringPosition = value.toLowerCase().indexOf(wordToSearch.toLowerCase());

	if (stringPosition !== -1) {
		const textFound = value.substr(stringPosition, wordToSearch.length);
		const textBefore = value.substring(0, stringPosition);
		const textAfter = value.substring(wordToSearch.length + stringPosition);

		value = `${textBefore}<span class="matchedText">${textFound}</span>${textAfter}`;
	}
	return value;
  }

}
