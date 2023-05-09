export enum Theme {
  light = 'light',
  dark = 'dark',
  nata = 'nata',
}

export class ThemeSwitcher {
  async setTheme (theme: Theme) {
    const body = document.querySelector('body')

    if (!body) {
      return
    }

    body.className += ' stop-animations'
    // eslint-disable-next-line no-unused-expressions
    body.offsetHeight // NOTE: Workaround to force CSS changes
    body.className = `${theme} stop-animations`
    // eslint-disable-next-line no-unused-expressions
    body.offsetHeight // NOTE: Workaround to force CSS changes
    body.className = theme

    localStorage.setItem('theme', theme)
  }

  async loadUserTheme () {
    await this.setTheme(this.getLastTheme() ?? this.getOsTheme())
  }

  private getLastTheme (): Theme | null {
    const theme = localStorage.getItem('theme') as Theme | null

    if (theme && Theme[theme]) {
      return theme
    }

    return null
  }

  private getOsTheme (): Theme {
    let theme = Theme.light

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = Theme.dark
    }

    return theme
  }
}
