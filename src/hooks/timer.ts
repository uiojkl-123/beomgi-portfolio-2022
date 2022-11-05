import { useState, useEffect } from "react";

export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));