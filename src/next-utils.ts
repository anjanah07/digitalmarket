import next from "next";

const PORT = Number(process.env.port) || 3000;

export const nextApp = next({
	dev: process.env.NODE_ENV !== "production",
	port: PORT,
});
//this is done to self host a next app
export const nextHandler = nextApp.getRequestHandler();
