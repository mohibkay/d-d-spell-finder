/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useCallback, useContext, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Column, mapColumnToDisplayName } from "../../enums/columns";

import { Theme } from "../../enums/theme";
import { AppSettingsContext } from "../app-settings-provider";
import { ColumnContext } from "../column-context-provider";
import { ThemeContext } from "../theme-context-provider";

import "./settings-offcanvas.scss";
import { deleteAllCookies } from "../../utility/cookies";

const SettingsOffcanvas = (): JSX.Element => {
	const [show, setShow] = useState<boolean>(false);
	const { useCookies, setUseCookies } = useContext(AppSettingsContext);
	const { currentTheme, updateTheme } = useContext(ThemeContext);
	const { selectedColumns, handleColumnChange } = useContext(ColumnContext);

	const handleOpen = useCallback(() => setShow(true), []);

	const handleClose = useCallback(() => setShow(false), []);

	const enableCookies = useCallback(() => setUseCookies(true), []);

	const disableCookies = useCallback(() => {
		setUseCookies(false);
		deleteAllCookies();
	}, []);

	const handleColumnCheckboxChange = useCallback(
		(e: React.BaseSyntheticEvent): void =>
			handleColumnChange(parseInt(e.target.getAttribute("data-column"))),
		[selectedColumns],
	);

	const isCheckboxChecked = (column: Column): boolean =>
		selectedColumns.find((value) => value === column) !== undefined;

	const handleSetTheme = useCallback(
		(e: React.BaseSyntheticEvent) =>
			updateTheme(parseInt(e.target.getAttribute("data-theme"))),
		[currentTheme],
	);

	return (
		<div className="settings-offcanvas">
			<Button variant="link" onClick={handleOpen}>
				<i className="bi bi-gear" style={{ fontSize: "1.5rem" }} />
			</Button>
			<Offcanvas show={show} onHide={handleClose} placement="end">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Settings</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Accordion>
						<Accordion.Item eventKey="cookies">
							<Accordion.Header>Cookies</Accordion.Header>
							<Accordion.Body>
								<ButtonGroup>
									<Button
										variant="primary"
										onClick={enableCookies}
										disabled={useCookies}
									>
										Enable
									</Button>
									<Button
										variant="primary"
										onClick={disableCookies}
										disabled={!useCookies}
									>
										Disable
									</Button>
								</ButtonGroup>
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="theme">
							<Accordion.Header>Theme</Accordion.Header>
							<Accordion.Body>
								<ButtonGroup>
									<Button
										variant="primary"
										onClick={handleSetTheme}
										data-theme={Theme.Light}
										disabled={currentTheme === Theme.Light}
									>
										Light
									</Button>
									<Button
										variant="primary"
										onClick={handleSetTheme}
										data-theme={Theme.Dark}
										disabled={currentTheme === Theme.Dark}
									>
										Dark
									</Button>
								</ButtonGroup>
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="columns">
							<Accordion.Header>Columns</Accordion.Header>
							<Accordion.Body>
								<div className="check-container">
									<div className="check-column">
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Name,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Name,
											)}
											data-column={Column.Name}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Level,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Level,
											)}
											data-column={Column.Level}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.School,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.School,
											)}
											data-column={Column.School}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.CastingTime,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.CastingTime,
											)}
											data-column={Column.CastingTime}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Duration,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Duration,
											)}
											data-column={Column.Duration}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Range,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Range,
											)}
											data-column={Column.Range}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Area,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Area,
											)}
											data-column={Column.Area}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Attack,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Attack,
											)}
											data-column={Column.Attack}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Save,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Save,
											)}
											data-column={Column.Save}
										/>
									</div>
									<div className="check-column">
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Damage,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Damage,
											)}
											data-column={Column.Damage}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Effect,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Effect,
											)}
											data-column={Column.Effect}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Ritual,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Ritual,
											)}
											data-column={Column.Ritual}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Concentration,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Concentration,
											)}
											data-column={Column.Concentration}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Verbal,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Verbal,
											)}
											data-column={Column.Verbal}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Somatic,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Somatic,
											)}
											data-column={Column.Somatic}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Material,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Material,
											)}
											data-column={Column.Material}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Source,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Source,
											)}
											data-column={Column.Source}
										/>
										<Form.Check
											type="checkbox"
											label={mapColumnToDisplayName(
												Column.Details,
											)}
											onChange={
												handleColumnCheckboxChange
											}
											checked={isCheckboxChecked(
												Column.Details,
											)}
											data-column={Column.Details}
										/>
									</div>
								</div>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
};

export default SettingsOffcanvas;
