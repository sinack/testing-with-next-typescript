# Next.js + TypeScript 環境でのテスト環境構築手順

1. Next.js の example 機能を使って TypeScript が使用できる Next.js アプリを clone

```bash
$ npx create-next-app --example with-typescript your-project
```

2. cypress のインストールと初期設定

```bash
$ yarn add -D cypress
```

パッケージがインストールできたら、`package.json`にコマンドを追加しておく。
`next dev`のデフォルトポートは 3000 なんですが、よく 3000 は他のものが使っているので 3050 で動かすことにします。

```json
"scripts": {
  "dev": "next -p 3050",
  "cypress:open": "cypress open",
  "cypress:run": "cypress run"
},
```

```bash
$ yarn cypress open
```

を実行すると、諸々 cypress の設定ファイルが生成されるので、`/cypress.json`に、以下の設定を追記しておく。

```json
{
  "baseUrl": "http://localhost:3050"
}
```

また、Cypress を TypeScript で書けるようにするために`/cypress/tsconfig.json`を作成して、以下のように設定し居ておく。

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "noEmit": true,
    // be explicit about types included
    // to avoid clashing with Jest types
    "types": ["cypress"]
  },
  "include": ["../node_modules/cypress", "./*/*.ts"]
}
```
