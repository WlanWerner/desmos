(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{384:function(s,e,t){"use strict";t.r(e);var n=t(9),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"installing-and-running-a-desmos-fullnode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-and-running-a-desmos-fullnode"}},[s._v("#")]),s._v(" Installing and running a Desmos fullnode")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("This guide is for new fullnodes only")]),s._v(" "),t("p",[s._v("If you have previously run a fullnode and you wish to update it instead, please follow the "),t("RouterLink",{attrs:{to:"/fullnode/update.html"}},[s._v("updating guide")]),s._v(".")],1)]),s._v(" "),t("h2",{attrs:{id:"_1-setup-your-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-setup-your-environment"}},[s._v("#")]),s._v(" 1. Setup your environment")]),s._v(" "),t("p",[s._v("In order to run a fullnode, you need to build "),t("code",[s._v("desmosd")]),s._v(" and "),t("code",[s._v("desmoscli")]),s._v(" which require "),t("code",[s._v("Go")]),s._v(", "),t("code",[s._v("git")]),s._v(", "),t("code",[s._v("gcc")]),s._v(" and "),t("code",[s._v("make")]),s._v(" installed.")]),s._v(" "),t("p",[s._v("This process depends on your working environment.")]),s._v(" "),t("Tabs",{attrs:{type:"border-card"}},[t("Tab",{attrs:{label:"Linux"}},[t("p",[s._v("The following example is based on "),t("strong",[s._v("Ubuntu (Debian)")]),s._v(" and assumes you are using a terminal environment by default. Please run the equivalent commands if you are running other Linux distributions.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Install git, gcc and make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" build-essential --yes\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Install Go with Snap")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" snap "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" go --classic\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Export environment variables")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/go\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])]),s._v(" "),t("Tab",{attrs:{label:"MacOS"}},[t("p",[s._v("To install the required build tools, simple "),t("a",{attrs:{href:"https://apps.apple.com/hk/app/xcode/id497799835?l=en&mt=12",target:"_blank",rel:"noopener noreferrer"}},[s._v("install Xcode from the Mac App Store"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("p",[s._v("To install "),t("code",[s._v("Go")]),s._v(" on "),t("strong",[s._v("MacOS")]),s._v(", the best option is to install with "),t("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[s._v("Homebrew")]),t("OutboundLink")],1),s._v(". To do so, open the "),t("code",[s._v("Terminal")]),s._v(" application and run the following command:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Install Homebrew")]),s._v("\n/usr/bin/ruby -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("If you don't know how to open a "),t("code",[s._v("Terminal")]),s._v(", you can search it by typing "),t("code",[s._v("terminal")]),s._v(" in "),t("code",[s._v("Spotlight")]),s._v(".")])]),s._v(" "),t("p",[s._v("After "),t("strong",[s._v("Homebrew")]),s._v(" is installed, run")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Install Go using Homebrew")]),s._v("\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" go\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Install Git using Homebrew")]),s._v("\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Export environment variables")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/go\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])]),s._v(" "),t("Tab",{attrs:{label:"Windows"}},[t("p",[s._v("The software has not been tested on "),t("strong",[s._v("Windows")]),s._v(". If you are currently running a "),t("strong",[s._v("Windows")]),s._v(" PC, the following options should be considered:")]),s._v(" "),t("ol",[t("li",[s._v("Switch to a "),t("strong",[s._v("Mac")]),s._v(" 👨‍💻.")]),s._v(" "),t("li",[s._v("Wipe your hard drive and install a "),t("strong",[s._v("Linux")]),s._v(" system on your PC.")]),s._v(" "),t("li",[s._v("Install a separate "),t("strong",[s._v("Linux")]),s._v(" system using "),t("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("VirtualBox"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("Run a "),t("strong",[s._v("Linux")]),s._v(" instance on a cloud provider.")])]),s._v(" "),t("p",[s._v("Note that is still possible to build and run the software on "),t("strong",[s._v("Windows")]),s._v(" but it may give you unexpected results and it may require additional setup to be done. If you insist to build and run the software on "),t("strong",[s._v("Windows")]),s._v(", the best bet would be installing the "),t("a",{attrs:{href:"https://chocolatey.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Chocolatey"),t("OutboundLink")],1),s._v(" package manager.")])])],1),s._v(" "),t("h2",{attrs:{id:"_2-build-the-software"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-build-the-software"}},[s._v("#")]),s._v(" 2. Build the software")]),s._v(" "),t("p",[s._v("Before installing the software, a consideration must be done.")]),s._v(" "),t("p",[s._v("By default, Desmos uses "),t("a",{attrs:{href:"https://github.com/google/leveldb",target:"_blank",rel:"noopener noreferrer"}},[s._v("LevelDB"),t("OutboundLink")],1),s._v(" as its database backend engine. However, since version "),t("code",[s._v("v0.6.0")]),s._v(" we've also added the possibility of optionally using "),t("a",{attrs:{href:"https://github.com/facebook/rocksdb",target:"_blank",rel:"noopener noreferrer"}},[s._v("Facebook's RocksDB"),t("OutboundLink")],1),s._v(", which, although still being experimental, is know to be faster and could lead to lower syncing times. If you want to try out RocksDB (which we suggest you to do) you can take a look at our "),t("RouterLink",{attrs:{to:"/fullnode/rocksdb-installation.html"}},[s._v("RocksDB installation guide")]),s._v(" before proceeding further.")],1),s._v(" "),t("p",[s._v("The following operations will all be done in the terminal environment under your home directory.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Clone the Desmos software")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/desmos-labs/desmos.git "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" desmos\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you do not have git installed, you can install it by running")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo apt install git-all --yes")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Checkout the correct commit")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Please check on https://github.com/desmos-labs/morpheus to get the proper ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the tag to use based on the current network version")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout tags/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Build the software")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you want to use the default database backend run ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you want to use RocksDB run instead")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_BACKEND")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rocksdb \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("If the software is built successfully, "),t("code",[s._v("desmosd")]),s._v(" and "),t("code",[s._v("desmoscli")]),s._v(" will be located at "),t("code",[s._v("/go/bin")]),s._v(" of your home directory. If you have setup your environment variables correctly in the previous step, you should be able to access them correctly. Try to check the version of the software.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("desmosd version --long\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_3-initialize-the-desmos-working-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-initialize-the-desmos-working-directory"}},[s._v("#")]),s._v(" 3. Initialize the Desmos working directory")]),s._v(" "),t("p",[s._v("Configuration files and chain data will be stored inside the "),t("code",[s._v(".desmosd")]),s._v(" directory under your home directory by default. It will be created when you initialize the environment.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Initialize the working envinorment for Desmos")]),s._v("\ndesmosd init "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your_moniker"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("You can choose any moniker your like. It will be saved in the "),t("code",[s._v("config.toml")]),s._v(" under the "),t("code",[s._v(".desmosd")]),s._v(" working directory.")]),s._v(" "),t("h2",{attrs:{id:"_4-get-the-genesis-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-get-the-genesis-file"}},[s._v("#")]),s._v(" 4. Get the genesis file")]),s._v(" "),t("p",[s._v("To connect to or start a new network, a genesis file is required. The file contains all the settings telling how the genesis block of the network should look like. To connect to the "),t("code",[s._v("morpheus")]),s._v(" testnets, you will need the corresponding genesis file of each testnet. Visit the "),t("a",{attrs:{href:"https://github.com/desmos-labs/morpheus",target:"_blank",rel:"noopener noreferrer"}},[s._v("testnet repo"),t("OutboundLink")],1),s._v(" and download the correct genesis file by running the following command.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# First, remove the newly created genesis file during the initialization")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.desmosd/config/genesis.json\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Download the existing genesis file for the testnet")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Assuming you are getting the genesis file for the latest testnet")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://raw.githubusercontent.com/desmos-labs/morpheus/master/genesis.json -o "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.desmosd/config/genesis.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"_5-connect-to-persistent-peer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-connect-to-persistent-peer"}},[s._v("#")]),s._v(" 5. Connect to persistent peer")]),s._v(" "),t("p",[s._v("To properly run your node, you will need to connect it to other full nodes running with the same software and genesis file. This can be done configuring the "),t("code",[s._v("persisten_peers")]),s._v(" value inside the "),t("code",[s._v("config.toml")]),s._v(" file localed under the "),t("code",[s._v(".desmosd")]),s._v(" working directory.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Open the config.toml file using text editor")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.desmosd/config/config.toml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("Locate the "),t("code",[s._v('persistent_peers = ""')]),s._v(" text at line 164. Update its value to a node address of a peer. The format of a node address must be "),t("code",[s._v("<node_id>@<node_ip_address>:<port>")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\npersistent_peers "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7fed5624ca577eb0333d3631b5e4f16ba1736979@54.180.98.75:26656"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("Save the file and exit the text editor.")]),s._v(" "),t("h2",{attrs:{id:"optional-change-your-database-backend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optional-change-your-database-backend"}},[s._v("#")]),s._v(" (Optional) Change your database backend")]),s._v(" "),t("p",[s._v("If you would like to run your node using "),t("a",{attrs:{href:"https://github.com/facebook/rocksdb",target:"_blank",rel:"noopener noreferrer"}},[s._v("Facebook's RocksDB"),t("OutboundLink")],1),s._v(" as the database backend, and you have correctly built the Desmos binaries to work with it following the instructions at "),t("a",{attrs:{href:"#2-build-the-software"}},[s._v("point 2")]),s._v(", there is one more thing you need to do.")]),s._v(" "),t("p",[s._v("In order to tell Tendermint to use RocksDB as its database backend engine, you are required to change the following like inside the "),t("code",[s._v("config.toml")]),s._v(" file:")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("db_backend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"goleveldb"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("To become")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("db_backend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rocksdb"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Once you have done so, you can go ahead with "),t("a",{attrs:{href:"#6-start-the-desmos-node"}},[s._v("point 6")]),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"_6-start-the-desmos-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-start-the-desmos-node"}},[s._v("#")]),s._v(" 6. Start the Desmos node")]),s._v(" "),t("p",[s._v("Now you are good to run the full node. To do so, run:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Run Desmos full node")]),s._v("\ndesmosd start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("The full node will connect to the peers and start syncing. You can check the status of the node by executing:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Check status of the node")]),s._v("\ndesmoscli status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("You should see an output like the following one:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n  "node_info": {\n    "protocol_version": {\n      "p2p": "7",\n      "block": "10",\n      "app": "0"\n    },\n    "id": "8307c16191e249d6d3871ce764262d40d9cf249f",\n    "listen_addr": "tcp://0.0.0.0:26656",\n    "network": "morpheus-1001",\n    "version": "0.32.7",\n    "channels": "4020212223303800",\n    "moniker": "Morpheus",\n    "other": {\n      "tx_index": "on",\n      "rpc_address": "tcp://0.0.0.0:26657"\n    }\n  },\n  "sync_info": {\n    "latest_block_hash": "AAB066E5B020C325E5AE41CFACFB95DAC83B261D0C4A24439A66A2977A03B7EC",\n    "latest_app_hash": "5B4CE89D3C1EFA1AE8E16710103EEAE1FDF9D13BE44F5847F5376810E8F39DAE",\n    "latest_block_height": "480950",\n    "latest_block_time": "2020-01-13T06:35:29.237599298Z",\n    "catching_up": false\n  },\n  "validator_info": {\n    "address": "25AD49347EC88C1922F18B317D12EA59DB0EC8D6",\n    "pub_key": {\n      "type": "tendermint/PubKeyEd25519",\n      "value": "WPZGfRMuyd8X4B4vAx79yfyqH+nmEboaML8YlJKT/uE="\n    },\n    "voting_power": "0"\n  }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br")])]),t("p",[s._v("If you see that the "),t("code",[s._v("catching_up")]),s._v(" value is "),t("code",[s._v("false")]),s._v(" under the "),t("code",[s._v("sync_info")]),s._v(", it means that you are fully synced. If it is "),t("code",[s._v("true")]),s._v(", it means your node is still syncing.")]),s._v(" "),t("p",[s._v("After your node is fully synced, you can consider running your full node as a "),t("RouterLink",{attrs:{to:"/validators/setup.html"}},[s._v("validator node")]),s._v(".")],1),s._v(" "),t("h2",{attrs:{id:"optional-configure-the-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optional-configure-the-service"}},[s._v("#")]),s._v(" (Optional) Configure the service")]),s._v(" "),t("p",[s._v("To allow your "),t("code",[s._v("desmosd")]),s._v(" instance to run in the background as a service you need to execute the following command")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/systemd/system/desmosd.service "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF  \n[Unit]\nDescription=Desmosd Full Node\nAfter=network-online.target\n\n[Service]\nUser=ubuntu\nExecStart=/home/ubuntu/go/bin/desmosd start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096 # To compensate the "Too many open files" issue.\n\n[Install]\nWantedBy=multi-user.target\nEOF')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("If you are logged as a user which is not "),t("code",[s._v("ubuntu")]),s._v(", make sure to edit the "),t("code",[s._v("User")]),s._v(" and "),t("code",[s._v("ExecStart")]),s._v(" values accordingly")])]),s._v(" "),t("p",[s._v("Once you have successfully created the service, you need to first enable it. You can do so by running")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" desmosd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("After this, you can run it by executing")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl start desmosd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"service-operations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-operations"}},[s._v("#")]),s._v(" Service operations")]),s._v(" "),t("h4",{attrs:{id:"check-the-service-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-the-service-status"}},[s._v("#")]),s._v(" Check the service status")]),s._v(" "),t("p",[s._v("If you want to see if the service is running properly, you can execute")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl status desmosd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("If everything is running smoothly you should see something like")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ systemctl status desmosd\n● desmosd.service - Desmosd Node\n   Loaded: loaded "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/etc/systemd/system/desmosd.service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" enabled"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" vendor preset: \n   Active: active "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-01-17 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":23:12 CET"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 2min 3s ago\n Main PID: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11318")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("desmosd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    Tasks: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("limit: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4419")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   CGroup: /system.slice/desmosd.service\n           └─11318 /root/go/bin/desmosd start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h4",{attrs:{id:"check-the-node-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-the-node-status"}},[s._v("#")]),s._v(" Check the node status")]),s._v(" "),t("p",[s._v("If you want to see the current status of the node, you can do so by running")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -100f /var/log/syslog\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("This should return something like")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Jan 17 09:24:55 <your-moniker> desmosd[11318]: I[2020-01-17|10:24:55.212] Executed block                               module=state height=10183 validTxs=0 invalidTxs=0\nJan 17 09:24:55 <your-moniker> desmosd[11318]: I[2020-01-17|10:24:55.237] Committed state                              module=state height=10183 txs=0 appHash=0D8BEBCAC81A7B8DA1FBBF93FA6E921E7815AE3EBF53B78DB66CD8437DFD70C8\nJan 17 09:24:55 <your-moniker> desmosd[11318]: I[2020-01-17|10:24:55.252] Executed block                               module=state height=10184 validTxs=0 invalidTxs=0\nJan 17 09:24:55 <your-moniker> desmosd[11318]: I[2020-01-17|10:24:55.261] Committed state                              module=state height=10184 txs=0 appHash=459F68E6C5BF31EA5E58FB959829A587BB09B9F4DCA9C31CB754E5F26125FCD5\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"stopping-the-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stopping-the-service"}},[s._v("#")]),s._v(" Stopping the service")]),s._v(" "),t("p",[s._v("If you wish to stop the service from running, you can do so by running")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl stop desmosd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("To check the successful stop, execute "),t("code",[s._v("systemctl status desmosd")]),s._v(". This should return")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ systemctl status desmosd\n● desmosd.service - Desmosd Node\n   Loaded: loaded "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/etc/systemd/system/desmosd.service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" enabled"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" vendor preset: enabled"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   Active: failed "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Result: exit-code"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-01-17 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":28:04 CET"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 3s ago\n  Process: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11318")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/go/bin/desmosd start "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exited, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("143")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n Main PID: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11318")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exited, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("143")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])],1)}),[],!1,null,null,null);e.default=a.exports}}]);