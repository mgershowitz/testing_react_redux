module.exports = {
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "import/no-extraneous-dependencies": [2, { devDependencies: true }],
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};
