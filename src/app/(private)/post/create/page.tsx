"use client"

import React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import dynamic from "next/dynamic"

import styles from "./page.module.css"

import { Button } from "@/components/Button"
import defaultBody from "@/utils/defaultPostBody"

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false })

const MarkdownPreview = dynamic(() => import("@uiw/react-markdown-preview"), { ssr: false })

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
				<Box>
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

	function setDefaultPost() {
		setText(defaultBody)
	}

	return (
		<div
			style={{
				margin: "0 auto",
				maxWidth: "900px",
				width: "90%",
				display: "flex",
				flexDirection: "column",
				gap: 20,
			}}
		>
			<h1>Markdown</h1>
			<Box
				sx={{
					borderBottom: 1,
					borderColor: "divider",
					position: "sticky",
					top: 0,
					background: "white",
					zIndex: 10,
				}}
			>
				<Tabs
					value={currentTab}
					onChange={handleChange}
					aria-label="basic tabs example"
					variant="fullWidth"
				>
					<Tab label="Editor" {...a11yProps(0)} />
					<Tab label="Preview" {...a11yProps(1)} />
				</Tabs>
			</Box>
			<TabPanel value={currentTab} index={0}>
				<Button onClick={setDefaultPost} label="Markdown de teste" type="primary" />
				<div className={styles.markdownEditor}>
					<MDEditor
						height={200}
						value={text}
						// @ts-expect-error
						onChange={(evText) => setText(evText)}
						preview="edit"
					/>
				</div>
			</TabPanel>
			<TabPanel value={currentTab} index={1}>
				<div className={styles.markdownEditor}>
					<MarkdownPreview source={text} />
				</div>
			</TabPanel>
		</div>
	)
}
