import axios from "axios";
import { ITaskModel } from "../components/TaskItem/type";

export default axios.create({
	baseURL: "http://localhost:3001/",
});

export const arr = () => {
	axios.get<ITaskModel[] | null>('http://localhost:3001/')
		.then(function (response) {
			console.log(response.data);
		});
}
