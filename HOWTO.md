## Create your package folder with a suitable name

## Create a git repository
```
git init
echo "# My Awesome Greeter" >> README.md
git add . && git commit -m "Initial commit"
git remote add origin <Git Repository Url>
git push -u origin master
```

## Init your Package
```
npm init -y
echo "node_modules" >> .gitignore
```

## Add Typescript as a DevDependency
```
npm install --save-dev typescript
```