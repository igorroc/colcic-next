"use client"

import React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { MarkdownResult } from "@/components/MarkdownResult"

import styles from "./page.module.css"

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box >
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

export default function Editor() {
	const [text, setText] = React.useState("")
	const [currentTab, setCurrentTab] = React.useState(0)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setCurrentTab(newValue)
	}

	function a11yProps(index: number) {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		}
	}

	return (
		<div
			style={{
				margin: "0 auto",
				width: "60vw",
				display: "flex",
				flexDirection: "column",
				gap: 20,
			}}
		>
			<h1>Markdown</h1>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs value={currentTab} onChange={handleChange} aria-label="basic tabs example">
					<Tab label="Editor" {...a11yProps(0)} />
					<Tab label="Preview" {...a11yProps(1)} />
				</Tabs>
			</Box>
			<TabPanel value={currentTab} index={0}>
				<textarea
					name="markdown"
					id={styles.markdownEditor}
					cols={20}
					rows={20}
					value={text}
					onChange={(e) => {
						setText(e.target.value)
					}}
				></textarea>
			</TabPanel>
			<TabPanel value={currentTab} index={1}>
				<div id="markdownResult">
					<MarkdownResult text={text} />
				</div>
			</TabPanel>
		</div>
	)
}
