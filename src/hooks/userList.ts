import IgorIMG from "/public/fakedata/users/igor.png"
import BiaIMG from "/public/fakedata/users/bia.png"
import IsaacIMG from "/public/fakedata/users/isaac.png"
import LeoIMG from "/public/fakedata/users/leo.png"
import AdrianIMG from "/public/fakedata/users/adrian.png"

export const users = [
	{
		id: 1,
		name: "Igor",
		username: "igor",
		password: "igor",
		token: "123456789",
		photo: IgorIMG,
		isAdmin: true,
	},
	{
		id: 2,
		name: "Bia",
		username: "bia",
		password: "bia",
		token: "987654321",
		photo: BiaIMG,
		isAdmin: false,
	},
	{
		id: 3,
		name: "Isaac",
		username: "isaac",
		password: "isaac",
		token: "789456123",
		photo: IsaacIMG,
		isAdmin: false,
	},
	{
		id: 4,
		name: "Leo",
		username: "leo",
		password: "leo",
		token: "456123789",
		photo: LeoIMG,
		isAdmin: false,
	},
	{
		id: 5,
		name: "Adrian",
		username: "adrian",
		password: "adrian",
		token: "123789456",
		photo: AdrianIMG,
		isAdmin: false,
	},
]
