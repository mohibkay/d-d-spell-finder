/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import NumberDie from "../number-die";
import { EdgeOfTheEmpireDiceColor } from "../../enums/edge-of-the-empire-dice-color";
import { EdgeOfTheEmpireDiceSymbol } from "../../enums/edge-of-the-empire-dice-symbol";

export default class ProficiencyDie extends NumberDie {
	color = EdgeOfTheEmpireDiceColor.Yellow;
	shortDisplayName = "Proficiency";
	displayName = "Proficiency Die";

	constructor(value?: number) {
		super(12, value);
	}

	mapValueToResults = (): EdgeOfTheEmpireDiceSymbol[] => {
		switch (this.value) {
			case 1:
				return [EdgeOfTheEmpireDiceSymbol.Blank];
			case 2:
			case 3:
				return [EdgeOfTheEmpireDiceSymbol.Success];
			case 4:
			case 5:
				return [
					EdgeOfTheEmpireDiceSymbol.Success,
					EdgeOfTheEmpireDiceSymbol.Success,
				];
			case 6:
				return [EdgeOfTheEmpireDiceSymbol.Advantage];
			case 7:
			case 8:
			case 9:
				return [
					EdgeOfTheEmpireDiceSymbol.Success,
					EdgeOfTheEmpireDiceSymbol.Advantage,
				];
			case 10:
			case 11:
				return [
					EdgeOfTheEmpireDiceSymbol.Advantage,
					EdgeOfTheEmpireDiceSymbol.Advantage,
				];
			case 12:
				return [EdgeOfTheEmpireDiceSymbol.Triumph];
			default:
				return [];
		}
	};
}
