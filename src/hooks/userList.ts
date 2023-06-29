import IgorIMG from "/public/fakedata/users/igor.png"
import BiaIMG from "/public/fakedata/users/bia.png"
import IsaacIMG from "/public/fakedata/users/isaac.png"
import LeoIMG from "/public/fakedata/users/leo.png"
import AdrianIMG from "/public/fakedata/users/adrian.png"

export const users = [
	{
		id: 1,
		name: "Igor",
		photo: IgorIMG,
		isAdmin: true,
	},
	{
		id: 2,
		name: "Bia",
		photo: BiaIMG,
		isAdmin: false,
	},
	{
		id: 3,
		name: "Isaac",
		photo: IsaacIMG,
		isAdmin: false,
	},
	{
		id: 4,
		name: "Leo",
		photo: LeoIMG,
		isAdmin: false,
	},
	{
		id: 5,
		name: "Adrian",
		photo: AdrianIMG,
		isAdmin: false,
	},
]
