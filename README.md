

## Dev Environment
### Initial install of layered (WSL or Linux(Debian/Ubuntu))
```sh
sudo apt update -y && sudo apt upgrade -y
sudo apt-get install ruby-full build-essential zlib1g-dev

```
#### For BASH
```sh
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```
#### For ZSH
```sh
echo '# Install Ruby Gems to ~/gems' >> ~/.zshrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.zshrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Install Layered
```sh
gem install jekyll bundler
bundle install
```
### Once everything is installed
```sh
bundle exec jekyll serve
```
