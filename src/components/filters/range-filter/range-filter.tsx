/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, {
	forwardRef,
	ReactElement,
	useCallback,
	useEffect,
	useImperativeHandle,
	useState,
} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { mapNumberToRangeDisplayName, Range } from "../../../enums/ranges";
import { AgGridFilterProps } from "../../../types/ag-grid-filter-props";
import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	numberBasedFilterIsFilterActive,
	NumberBasedFilterProps,
	NumberBasedFilterSetModel,
} from "../../../utility/filters/number-based-filter";

import "./range-filter.scss";

const filterDisabledArray = createDisabledFilterArray(25);

const RangeFilter = forwardRef(
	(props: AgGridFilterProps, ref): ReactElement => {
		const [selectedRanges, setSelectedRanges] =
			useState<number[]>(filterDisabledArray);

		useEffect(() => {
			props.filterChangedCallback();
		}, [selectedRanges]);

		useImperativeHandle(ref, () => {
			const doesFilterPass = (props: NumberBasedFilterProps) => {
				return numberBasedFilterDoesFilterPass(
					props?.data?.range,
					selectedRanges,
				);
			};

			const isFilterActive = () => {
				return numberBasedFilterIsFilterActive(
					selectedRanges.length,
					filterDisabledArray.length,
				);
			};

			const getModel = () => {
				if (!isFilterActive()) {
					return null;
				}

				return { value: selectedRanges };
			};

			const setModel = (model: NumberBasedFilterSetModel) => {
				setSelectedRanges(model?.value ?? []);
			};

			return {
				doesFilterPass,
				isFilterActive,
				getModel,
				setModel,
			};
		});

		const selectAllRanges = useCallback(
			() => setSelectedRanges(filterDisabledArray),
			[],
		);

		const selectNoRanges = useCallback(() => setSelectedRanges([]), []);

		const handleCheck = useCallback(
			(e: React.BaseSyntheticEvent): void => {
				const range = e.target.getAttribute("data-range");
				numberBasedFilterHandleCheck(
					selectedRanges,
					setSelectedRanges,
					range,
				);
			},
			[selectedRanges],
		);

		const isChecked = (x: number): boolean | undefined =>
			numberBasedFilterIsChecked(selectedRanges, x);

		return (
			<div className="range-filter">
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.Self)}
					checked={isChecked(Range.Self)}
					data-range={Range.Self}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.SelfByFive)}
					checked={isChecked(Range.SelfByFive)}
					data-range={Range.SelfByFive}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.SelfByFifteen)}
					checked={isChecked(Range.SelfByFifteen)}
					data-range={Range.SelfByFifteen}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.SelfByThirty)}
					checked={isChecked(Range.SelfByThirty)}
					data-range={Range.SelfByThirty}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.SelfBySixty)}
					checked={isChecked(Range.SelfBySixty)}
					data-range={Range.SelfBySixty}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.Touch)}
					checked={isChecked(Range.Touch)}
					data-range={Range.Touch}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.TouchBySixty)}
					checked={isChecked(Range.TouchBySixty)}
					data-range={Range.TouchBySixty}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.Five)}
					checked={isChecked(Range.Five)}
					data-range={Range.Five}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.Ten)}
					checked={isChecked(Range.Ten)}
					data-range={Range.Ten}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.Twenty)}
					checked={isChecked(Range.Twenty)}
					data-range={Range.Twenty}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.Thirty)}
					checked={isChecked(Range.Thirty)}
					data-range={Range.Thirty}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.Sixty)}
					checked={isChecked(Range.Sixty)}
					data-range={Range.Sixty}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.Ninety)}
					checked={isChecked(Range.Ninety)}
					data-range={Range.Ninety}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.OneHundred)}
					checked={isChecked(Range.OneHundred)}
					data-range={Range.OneHundred}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.OneHundredTwenty)}
					checked={isChecked(Range.OneHundredTwenty)}
					data-range={Range.OneHundredTwenty}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(
						Range.OneHundredTwentyByTwenty,
					)}
					checked={isChecked(Range.OneHundredTwentyByTwenty)}
					data-range={Range.OneHundredTwentyByTwenty}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.OneHundredFifty)}
					checked={isChecked(Range.OneHundredFifty)}
					data-range={Range.OneHundredFifty}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(
						Range.OneHundredFiftyBySixty,
					)}
					checked={isChecked(Range.OneHundredFiftyBySixty)}
					data-range={Range.OneHundredFiftyBySixty}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.Sight)}
					checked={isChecked(Range.Sight)}
					data-range={Range.Sight}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.ThreeHundred)}
					checked={isChecked(Range.ThreeHundred)}
					data-range={Range.ThreeHundred}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.FiveHundred)}
					checked={isChecked(Range.FiveHundred)}
					data-range={Range.FiveHundred}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.OneThousand)}
					checked={isChecked(Range.OneThousand)}
					data-range={Range.OneThousand}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.OneMile)}
					checked={isChecked(Range.OneMile)}
					data-range={Range.OneMile}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.FiveHundredMiles)}
					checked={isChecked(Range.FiveHundredMiles)}
					data-range={Range.FiveHundredMiles}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToRangeDisplayName(Range.Unlimited)}
					checked={isChecked(Range.Unlimited)}
					data-range={Range.Unlimited}
				/>
				<Button variant="outline-primary" onClick={selectAllRanges}>
					All
				</Button>
				<Button variant="outline-primary" onClick={selectNoRanges}>
					None
				</Button>
			</div>
		);
	},
);

RangeFilter.displayName = "RangeFilter";

export default RangeFilter;
