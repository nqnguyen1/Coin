(async () => {
  const { replaceInFile } = await import("replace-in-file");

  const options = {
    files: "dist/index.html", // adjust path if necessary
    from: /<link rel="stylesheet" href="index\.css"\s*\/>/,
    to: "",
  };

  try {
    await replaceInFile(options);
    console.log("Successfully removed index.css from index.html");
  } catch (error) {
    console.error("Error occurred:", error);
  }
})();
