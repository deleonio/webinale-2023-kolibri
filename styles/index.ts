import { KoliBriDevHelper, register } from "@public-ui/components";
import {
  BPA,
  BMF,
  DESYv2,
  ECL_EC,
  ECL_EU,
  ITZBund,
  MAPZ,
  ZOLLv2,
} from "@public-ui/themes";
import { TH } from "@public-oss/kolibri-themes";
import "./base.css";

register(
  [BPA, BMF, DESYv2, ECL_EC, ECL_EU, ITZBund, MAPZ, ZOLLv2, TH],
  () => {
    return new Promise((resolve) => resolve());
  },
  {
    theme: {
      detect: "auto",
    },
  }
)
  .then(() => {
    KoliBriDevHelper.patchTheme("ecl-eu", {
      "KOL-ICON": `/*---------------------------------------------------------------------------------------------
		*  Copyright (c) Microsoft Corporation. All rights reserved.
		*  Licensed under the MIT License. See License.txt in the project root for license information.
		*--------------------------------------------------------------------------------------------*/
	   
	   @font-face {
		   font-family: "codicon";
		   font-display: block;
		   src: url("./codicon.ttf?2ab61cbaefbdf4c7c5589068100bee0c") format("truetype");
	   }
	   
	   .codicon[class*='codicon-'] {
		   font: normal normal normal 16px/1 codicon;
		   display: inline-block;
		   text-decoration: none;
		   text-rendering: auto;
		   text-align: center;
		   -webkit-font-smoothing: antialiased;
		   -moz-osx-font-smoothing: grayscale;
		   user-select: none;
		   -webkit-user-select: none;
		   -ms-user-select: none;
	   }
	   
	   /*---------------------
		*  Modifiers
		*-------------------*/
	   
	   @keyframes codicon-spin {
		   100% {
			   transform:rotate(360deg);
		   }
	   }
	   
	   .codicon-sync.codicon-modifier-spin,
	   .codicon-loading.codicon-modifier-spin,
	   .codicon-gear.codicon-modifier-spin {
		   /* Use steps to throttle FPS to reduce CPU usage */
		   animation: codicon-spin 1.5s steps(30) infinite;
	   }
	   
	   .codicon-modifier-disabled {
		   opacity: 0.5;
	   }
	   
	   .codicon-modifier-hidden {
		   opacity: 0;
	   }
	   
	   /* custom speed & easing for loading icon */
	   .codicon-loading {
		   animation-duration: 1s !important;
		   animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
	   }
	   
	   /*---------------------
		*  Icons
		*-------------------*/
	   
	   .codicon-add:before { content: "\\ea60" }
	   .codicon-plus:before { content: "\\ea60" }
	   .codicon-gist-new:before { content: "\\ea60" }
	   .codicon-repo-create:before { content: "\\ea60" }
	   .codicon-lightbulb:before { content: "\\ea61" }
	   .codicon-light-bulb:before { content: "\\ea61" }
	   .codicon-repo:before { content: "\\ea62" }
	   .codicon-repo-delete:before { content: "\\ea62" }
	   .codicon-gist-fork:before { content: "\\ea63" }
	   .codicon-repo-forked:before { content: "\\ea63" }
	   .codicon-git-pull-request:before { content: "\\ea64" }
	   .codicon-git-pull-request-abandoned:before { content: "\\ea64" }
	   .codicon-record-keys:before { content: "\\ea65" }
	   .codicon-keyboard:before { content: "\\ea65" }
	   .codicon-tag:before { content: "\\ea66" }
	   .codicon-tag-add:before { content: "\\ea66" }
	   .codicon-tag-remove:before { content: "\\ea66" }
	   .codicon-person:before { content: "\\ea67" }
	   .codicon-person-follow:before { content: "\\ea67" }
	   .codicon-person-outline:before { content: "\\ea67" }
	   .codicon-person-filled:before { content: "\\ea67" }
	   .codicon-git-branch:before { content: "\\ea68" }
	   .codicon-git-branch-create:before { content: "\\ea68" }
	   .codicon-git-branch-delete:before { content: "\\ea68" }
	   .codicon-source-control:before { content: "\\ea68" }
	   .codicon-mirror:before { content: "\\ea69" }
	   .codicon-mirror-public:before { content: "\\ea69" }
	   .codicon-star:before { content: "\\ea6a" }
	   .codicon-star-add:before { content: "\\ea6a" }
	   .codicon-star-delete:before { content: "\\ea6a" }
	   .codicon-star-empty:before { content: "\\ea6a" }
	   .codicon-comment:before { content: "\\ea6b" }
	   .codicon-comment-add:before { content: "\\ea6b" }
	   .codicon-alert:before { content: "\\ea6c" }
	   .codicon-warning:before { content: "\\ea6c" }
	   .codicon-search:before { content: "\\ea6d" }
	   .codicon-search-save:before { content: "\\ea6d" }
	   .codicon-log-out:before { content: "\\ea6e" }
	   .codicon-sign-out:before { content: "\\ea6e" }
	   .codicon-log-in:before { content: "\\ea6f" }
	   .codicon-sign-in:before { content: "\\ea6f" }
	   .codicon-eye:before { content: "\\ea70" }
	   .codicon-eye-unwatch:before { content: "\\ea70" }
	   .codicon-eye-watch:before { content: "\\ea70" }
	   .codicon-circle-filled:before { content: "\\ea71" }
	   .codicon-primitive-dot:before { content: "\\ea71" }
	   .codicon-close-dirty:before { content: "\\ea71" }
	   .codicon-debug-breakpoint:before { content: "\\ea71" }
	   .codicon-debug-breakpoint-disabled:before { content: "\\ea71" }
	   .codicon-debug-hint:before { content: "\\ea71" }
	   .codicon-terminal-decoration-success:before { content: "\\ea71" }
	   .codicon-primitive-square:before { content: "\\ea72" }
	   .codicon-edit:before { content: "\\ea73" }
	   .codicon-pencil:before { content: "\\ea73" }
	   .codicon-info:before { content: "\\ea74" }
	   .codicon-issue-opened:before { content: "\\ea74" }
	   .codicon-gist-private:before { content: "\\ea75" }
	   .codicon-git-fork-private:before { content: "\\ea75" }
	   .codicon-lock:before { content: "\\ea75" }
	   .codicon-mirror-private:before { content: "\\ea75" }
	   .codicon-close:before { content: "\\ea76" }
	   .codicon-remove-close:before { content: "\\ea76" }
	   .codicon-x:before { content: "\\ea76" }
	   .codicon-repo-sync:before { content: "\\ea77" }
	   .codicon-sync:before { content: "\\ea77" }
	   .codicon-clone:before { content: "\\ea78" }
	   .codicon-desktop-download:before { content: "\\ea78" }
	   .codicon-beaker:before { content: "\\ea79" }
	   .codicon-microscope:before { content: "\\ea79" }
	   .codicon-vm:before { content: "\\ea7a" }
	   .codicon-device-desktop:before { content: "\\ea7a" }
	   .codicon-file:before { content: "\\ea7b" }
	   .codicon-file-text:before { content: "\\ea7b" }
	   .codicon-more:before { content: "\\ea7c" }
	   .codicon-ellipsis:before { content: "\\ea7c" }
	   .codicon-kebab-horizontal:before { content: "\\ea7c" }
	   .codicon-mail-reply:before { content: "\\ea7d" }
	   .codicon-reply:before { content: "\\ea7d" }
	   .codicon-organization:before { content: "\\ea7e" }
	   .codicon-organization-filled:before { content: "\\ea7e" }
	   .codicon-organization-outline:before { content: "\\ea7e" }
	   .codicon-new-file:before { content: "\\ea7f" }
	   .codicon-file-add:before { content: "\\ea7f" }
	   .codicon-new-folder:before { content: "\\ea80" }
	   .codicon-file-directory-create:before { content: "\\ea80" }
	   .codicon-trash:before { content: "\\ea81" }
	   .codicon-trashcan:before { content: "\\ea81" }
	   .codicon-history:before { content: "\\ea82" }
	   .codicon-clock:before { content: "\\ea82" }
	   .codicon-folder:before { content: "\\ea83" }
	   .codicon-file-directory:before { content: "\\ea83" }
	   .codicon-symbol-folder:before { content: "\\ea83" }
	   .codicon-logo-github:before { content: "\\ea84" }
	   .codicon-mark-github:before { content: "\\ea84" }
	   .codicon-github:before { content: "\\ea84" }
	   .codicon-terminal:before { content: "\\ea85" }
	   .codicon-console:before { content: "\\ea85" }
	   .codicon-repl:before { content: "\\ea85" }
	   .codicon-zap:before { content: "\\ea86" }
	   .codicon-symbol-event:before { content: "\\ea86" }
	   .codicon-error:before { content: "\\ea87" }
	   .codicon-stop:before { content: "\\ea87" }
	   .codicon-variable:before { content: "\\ea88" }
	   .codicon-symbol-variable:before { content: "\\ea88" }
	   .codicon-array:before { content: "\\ea8a" }
	   .codicon-symbol-array:before { content: "\\ea8a" }
	   .codicon-symbol-module:before { content: "\\ea8b" }
	   .codicon-symbol-package:before { content: "\\ea8b" }
	   .codicon-symbol-namespace:before { content: "\\ea8b" }
	   .codicon-symbol-object:before { content: "\\ea8b" }
	   .codicon-symbol-method:before { content: "\\ea8c" }
	   .codicon-symbol-function:before { content: "\\ea8c" }
	   .codicon-symbol-constructor:before { content: "\\ea8c" }
	   .codicon-symbol-boolean:before { content: "\\ea8f" }
	   .codicon-symbol-null:before { content: "\\ea8f" }
	   .codicon-symbol-numeric:before { content: "\\ea90" }
	   .codicon-symbol-number:before { content: "\\ea90" }
	   .codicon-symbol-structure:before { content: "\\ea91" }
	   .codicon-symbol-struct:before { content: "\\ea91" }
	   .codicon-symbol-parameter:before { content: "\\ea92" }
	   .codicon-symbol-type-parameter:before { content: "\\ea92" }
	   .codicon-symbol-key:before { content: "\\ea93" }
	   .codicon-symbol-text:before { content: "\\ea93" }
	   .codicon-symbol-reference:before { content: "\\ea94" }
	   .codicon-go-to-file:before { content: "\\ea94" }
	   .codicon-symbol-enum:before { content: "\\ea95" }
	   .codicon-symbol-value:before { content: "\\ea95" }
	   .codicon-symbol-ruler:before { content: "\\ea96" }
	   .codicon-symbol-unit:before { content: "\\ea96" }
	   .codicon-activate-breakpoints:before { content: "\\ea97" }
	   .codicon-archive:before { content: "\\ea98" }
	   .codicon-arrow-both:before { content: "\\ea99" }
	   .codicon-arrow-down:before { content: "\\ea9a" }
	   .codicon-arrow-left:before { content: "\\ea9b" }
	   .codicon-arrow-right:before { content: "\\ea9c" }
	   .codicon-arrow-small-down:before { content: "\\ea9d" }
	   .codicon-arrow-small-left:before { content: "\\ea9e" }
	   .codicon-arrow-small-right:before { content: "\\ea9f" }
	   .codicon-arrow-small-up:before { content: "\\eaa0" }
	   .codicon-arrow-up:before { content: "\\eaa1" }
	   .codicon-bell:before { content: "\\eaa2" }
	   .codicon-bold:before { content: "\\eaa3" }
	   .codicon-book:before { content: "\\eaa4" }
	   .codicon-bookmark:before { content: "\\eaa5" }
	   .codicon-debug-breakpoint-conditional-unverified:before { content: "\\eaa6" }
	   .codicon-debug-breakpoint-conditional:before { content: "\\eaa7" }
	   .codicon-debug-breakpoint-conditional-disabled:before { content: "\\eaa7" }
	   .codicon-debug-breakpoint-data-unverified:before { content: "\\eaa8" }
	   .codicon-debug-breakpoint-data:before { content: "\\eaa9" }
	   .codicon-debug-breakpoint-data-disabled:before { content: "\\eaa9" }
	   .codicon-debug-breakpoint-log-unverified:before { content: "\\eaaa" }
	   .codicon-debug-breakpoint-log:before { content: "\\eaab" }
	   .codicon-debug-breakpoint-log-disabled:before { content: "\\eaab" }
	   .codicon-briefcase:before { content: "\\eaac" }
	   .codicon-broadcast:before { content: "\\eaad" }
	   .codicon-browser:before { content: "\\eaae" }
	   .codicon-bug:before { content: "\\eaaf" }
	   .codicon-calendar:before { content: "\\eab0" }
	   .codicon-case-sensitive:before { content: "\\eab1" }
	   .codicon-check:before { content: "\\eab2" }
	   .codicon-checklist:before { content: "\\eab3" }
	   .codicon-chevron-down:before { content: "\\eab4" }
	   .codicon-chevron-left:before { content: "\\eab5" }
	   .codicon-chevron-right:before { content: "\\eab6" }
	   .codicon-chevron-up:before { content: "\\eab7" }
	   .codicon-chrome-close:before { content: "\\eab8" }
	   .codicon-chrome-maximize:before { content: "\\eab9" }
	   .codicon-chrome-minimize:before { content: "\\eaba" }
	   .codicon-chrome-restore:before { content: "\\eabb" }
	   .codicon-circle-outline:before { content: "\\eabc" }
	   .codicon-circle:before { content: "\\eabc" }
	   .codicon-debug-breakpoint-unverified:before { content: "\\eabc" }
	   .codicon-terminal-decoration-incomplete:before { content: "\\eabc" }
	   .codicon-circle-slash:before { content: "\\eabd" }
	   .codicon-circuit-board:before { content: "\\eabe" }
	   .codicon-clear-all:before { content: "\\eabf" }
	   .codicon-clippy:before { content: "\\eac0" }
	   .codicon-close-all:before { content: "\\eac1" }
	   .codicon-cloud-download:before { content: "\\eac2" }
	   .codicon-cloud-upload:before { content: "\\eac3" }
	   .codicon-code:before { content: "\\eac4" }
	   .codicon-collapse-all:before { content: "\\eac5" }
	   .codicon-color-mode:before { content: "\\eac6" }
	   .codicon-comment-discussion:before { content: "\\eac7" }
	   .codicon-credit-card:before { content: "\\eac9" }
	   .codicon-dash:before { content: "\\eacc" }
	   .codicon-dashboard:before { content: "\\eacd" }
	   .codicon-database:before { content: "\\eace" }
	   .codicon-debug-continue:before { content: "\\eacf" }
	   .codicon-debug-disconnect:before { content: "\\ead0" }
	   .codicon-debug-pause:before { content: "\\ead1" }
	   .codicon-debug-restart:before { content: "\\ead2" }
	   .codicon-debug-start:before { content: "\\ead3" }
	   .codicon-debug-step-into:before { content: "\\ead4" }
	   .codicon-debug-step-out:before { content: "\\ead5" }
	   .codicon-debug-step-over:before { content: "\\ead6" }
	   .codicon-debug-stop:before { content: "\\ead7" }
	   .codicon-debug:before { content: "\\ead8" }
	   .codicon-device-camera-video:before { content: "\\ead9" }
	   .codicon-device-camera:before { content: "\\eada" }
	   .codicon-device-mobile:before { content: "\\eadb" }
	   .codicon-diff-added:before { content: "\\eadc" }
	   .codicon-diff-ignored:before { content: "\\eadd" }
	   .codicon-diff-modified:before { content: "\\eade" }
	   .codicon-diff-removed:before { content: "\\eadf" }
	   .codicon-diff-renamed:before { content: "\\eae0" }
	   .codicon-diff:before { content: "\\eae1" }
	   .codicon-discard:before { content: "\\eae2" }
	   .codicon-editor-layout:before { content: "\\eae3" }
	   .codicon-empty-window:before { content: "\\eae4" }
	   .codicon-exclude:before { content: "\\eae5" }
	   .codicon-extensions:before { content: "\\eae6" }
	   .codicon-eye-closed:before { content: "\\eae7" }
	   .codicon-file-binary:before { content: "\\eae8" }
	   .codicon-file-code:before { content: "\\eae9" }
	   .codicon-file-media:before { content: "\\eaea" }
	   .codicon-file-pdf:before { content: "\\eaeb" }
	   .codicon-file-submodule:before { content: "\\eaec" }
	   .codicon-file-symlink-directory:before { content: "\\eaed" }
	   .codicon-file-symlink-file:before { content: "\\eaee" }
	   .codicon-file-zip:before { content: "\\eaef" }
	   .codicon-files:before { content: "\\eaf0" }
	   .codicon-filter:before { content: "\\eaf1" }
	   .codicon-flame:before { content: "\\eaf2" }
	   .codicon-fold-down:before { content: "\\eaf3" }
	   .codicon-fold-up:before { content: "\\eaf4" }
	   .codicon-fold:before { content: "\\eaf5" }
	   .codicon-folder-active:before { content: "\\eaf6" }
	   .codicon-folder-opened:before { content: "\\eaf7" }
	   .codicon-gear:before { content: "\\eaf8" }
	   .codicon-gift:before { content: "\\eaf9" }
	   .codicon-gist-secret:before { content: "\\eafa" }
	   .codicon-gist:before { content: "\\eafb" }
	   .codicon-git-commit:before { content: "\\eafc" }
	   .codicon-git-compare:before { content: "\\eafd" }
	   .codicon-compare-changes:before { content: "\\eafd" }
	   .codicon-git-merge:before { content: "\\eafe" }
	   .codicon-github-action:before { content: "\\eaff" }
	   .codicon-github-alt:before { content: "\\eb00" }
	   .codicon-globe:before { content: "\\eb01" }
	   .codicon-grabber:before { content: "\\eb02" }
	   .codicon-graph:before { content: "\\eb03" }
	   .codicon-gripper:before { content: "\\eb04" }
	   .codicon-heart:before { content: "\\eb05" }
	   .codicon-home:before { content: "\\eb06" }
	   .codicon-horizontal-rule:before { content: "\\eb07" }
	   .codicon-hubot:before { content: "\\eb08" }
	   .codicon-inbox:before { content: "\\eb09" }
	   .codicon-issue-reopened:before { content: "\\eb0b" }
	   .codicon-issues:before { content: "\\eb0c" }
	   .codicon-italic:before { content: "\\eb0d" }
	   .codicon-jersey:before { content: "\\eb0e" }
	   .codicon-json:before { content: "\\eb0f" }
	   .codicon-kebab-vertical:before { content: "\\eb10" }
	   .codicon-key:before { content: "\\eb11" }
	   .codicon-law:before { content: "\\eb12" }
	   .codicon-lightbulb-autofix:before { content: "\\eb13" }
	   .codicon-link-external:before { content: "\\eb14" }
	   .codicon-link:before { content: "\\eb15" }
	   .codicon-list-ordered:before { content: "\\eb16" }
	   .codicon-list-unordered:before { content: "\\eb17" }
	   .codicon-live-share:before { content: "\\eb18" }
	   .codicon-loading:before { content: "\\eb19" }
	   .codicon-location:before { content: "\\eb1a" }
	   .codicon-mail-read:before { content: "\\eb1b" }
	   .codicon-mail:before { content: "\\eb1c" }
	   .codicon-markdown:before { content: "\\eb1d" }
	   .codicon-megaphone:before { content: "\\eb1e" }
	   .codicon-mention:before { content: "\\eb1f" }
	   .codicon-milestone:before { content: "\\eb20" }
	   .codicon-mortar-board:before { content: "\\eb21" }
	   .codicon-move:before { content: "\\eb22" }
	   .codicon-multiple-windows:before { content: "\\eb23" }
	   .codicon-mute:before { content: "\\eb24" }
	   .codicon-no-newline:before { content: "\\eb25" }
	   .codicon-note:before { content: "\\eb26" }
	   .codicon-octoface:before { content: "\\eb27" }
	   .codicon-open-preview:before { content: "\\eb28" }
	   .codicon-package:before { content: "\\eb29" }
	   .codicon-paintcan:before { content: "\\eb2a" }
	   .codicon-pin:before { content: "\\eb2b" }
	   .codicon-play:before { content: "\\eb2c" }
	   .codicon-run:before { content: "\\eb2c" }
	   .codicon-plug:before { content: "\\eb2d" }
	   .codicon-preserve-case:before { content: "\\eb2e" }
	   .codicon-preview:before { content: "\\eb2f" }
	   .codicon-project:before { content: "\\eb30" }
	   .codicon-pulse:before { content: "\\eb31" }
	   .codicon-question:before { content: "\\eb32" }
	   .codicon-quote:before { content: "\\eb33" }
	   .codicon-radio-tower:before { content: "\\eb34" }
	   .codicon-reactions:before { content: "\\eb35" }
	   .codicon-references:before { content: "\\eb36" }
	   .codicon-refresh:before { content: "\\eb37" }
	   .codicon-regex:before { content: "\\eb38" }
	   .codicon-remote-explorer:before { content: "\\eb39" }
	   .codicon-remote:before { content: "\\eb3a" }
	   .codicon-remove:before { content: "\\eb3b" }
	   .codicon-replace-all:before { content: "\\eb3c" }
	   .codicon-replace:before { content: "\\eb3d" }
	   .codicon-repo-clone:before { content: "\\eb3e" }
	   .codicon-repo-force-push:before { content: "\\eb3f" }
	   .codicon-repo-pull:before { content: "\\eb40" }
	   .codicon-repo-push:before { content: "\\eb41" }
	   .codicon-report:before { content: "\\eb42" }
	   .codicon-request-changes:before { content: "\\eb43" }
	   .codicon-rocket:before { content: "\\eb44" }
	   .codicon-root-folder-opened:before { content: "\\eb45" }
	   .codicon-root-folder:before { content: "\\eb46" }
	   .codicon-rss:before { content: "\\eb47" }
	   .codicon-ruby:before { content: "\\eb48" }
	   .codicon-save-all:before { content: "\\eb49" }
	   .codicon-save-as:before { content: "\\eb4a" }
	   .codicon-save:before { content: "\\eb4b" }
	   .codicon-screen-full:before { content: "\\eb4c" }
	   .codicon-screen-normal:before { content: "\\eb4d" }
	   .codicon-search-stop:before { content: "\\eb4e" }
	   .codicon-server:before { content: "\\eb50" }
	   .codicon-settings-gear:before { content: "\\eb51" }
	   .codicon-settings:before { content: "\\eb52" }
	   .codicon-shield:before { content: "\\eb53" }
	   .codicon-smiley:before { content: "\\eb54" }
	   .codicon-sort-precedence:before { content: "\\eb55" }
	   .codicon-split-horizontal:before { content: "\\eb56" }
	   .codicon-split-vertical:before { content: "\\eb57" }
	   .codicon-squirrel:before { content: "\\eb58" }
	   .codicon-star-full:before { content: "\\eb59" }
	   .codicon-star-half:before { content: "\\eb5a" }
	   .codicon-symbol-class:before { content: "\\eb5b" }
	   .codicon-symbol-color:before { content: "\\eb5c" }
	   .codicon-symbol-constant:before { content: "\\eb5d" }
	   .codicon-symbol-enum-member:before { content: "\\eb5e" }
	   .codicon-symbol-field:before { content: "\\eb5f" }
	   .codicon-symbol-file:before { content: "\\eb60" }
	   .codicon-symbol-interface:before { content: "\\eb61" }
	   .codicon-symbol-keyword:before { content: "\\eb62" }
	   .codicon-symbol-misc:before { content: "\\eb63" }
	   .codicon-symbol-operator:before { content: "\\eb64" }
	   .codicon-symbol-property:before { content: "\\eb65" }
	   .codicon-wrench:before { content: "\\eb65" }
	   .codicon-wrench-subaction:before { content: "\\eb65" }
	   .codicon-symbol-snippet:before { content: "\\eb66" }
	   .codicon-tasklist:before { content: "\\eb67" }
	   .codicon-telescope:before { content: "\\eb68" }
	   .codicon-text-size:before { content: "\\eb69" }
	   .codicon-three-bars:before { content: "\\eb6a" }
	   .codicon-thumbsdown:before { content: "\\eb6b" }
	   .codicon-thumbsup:before { content: "\\eb6c" }
	   .codicon-tools:before { content: "\\eb6d" }
	   .codicon-triangle-down:before { content: "\\eb6e" }
	   .codicon-triangle-left:before { content: "\\eb6f" }
	   .codicon-triangle-right:before { content: "\\eb70" }
	   .codicon-triangle-up:before { content: "\\eb71" }
	   .codicon-twitter:before { content: "\\eb72" }
	   .codicon-unfold:before { content: "\\eb73" }
	   .codicon-unlock:before { content: "\\eb74" }
	   .codicon-unmute:before { content: "\\eb75" }
	   .codicon-unverified:before { content: "\\eb76" }
	   .codicon-verified:before { content: "\\eb77" }
	   .codicon-versions:before { content: "\\eb78" }
	   .codicon-vm-active:before { content: "\\eb79" }
	   .codicon-vm-outline:before { content: "\\eb7a" }
	   .codicon-vm-running:before { content: "\\eb7b" }
	   .codicon-watch:before { content: "\\eb7c" }
	   .codicon-whitespace:before { content: "\\eb7d" }
	   .codicon-whole-word:before { content: "\\eb7e" }
	   .codicon-window:before { content: "\\eb7f" }
	   .codicon-word-wrap:before { content: "\\eb80" }
	   .codicon-zoom-in:before { content: "\\eb81" }
	   .codicon-zoom-out:before { content: "\\eb82" }
	   .codicon-list-filter:before { content: "\\eb83" }
	   .codicon-list-flat:before { content: "\\eb84" }
	   .codicon-list-selection:before { content: "\\eb85" }
	   .codicon-selection:before { content: "\\eb85" }
	   .codicon-list-tree:before { content: "\\eb86" }
	   .codicon-debug-breakpoint-function-unverified:before { content: "\\eb87" }
	   .codicon-debug-breakpoint-function:before { content: "\\eb88" }
	   .codicon-debug-breakpoint-function-disabled:before { content: "\\eb88" }
	   .codicon-debug-stackframe-active:before { content: "\\eb89" }
	   .codicon-circle-small-filled:before { content: "\\eb8a" }
	   .codicon-debug-stackframe-dot:before { content: "\\eb8a" }
	   .codicon-terminal-decoration-mark:before { content: "\\eb8a" }
	   .codicon-debug-stackframe:before { content: "\\eb8b" }
	   .codicon-debug-stackframe-focused:before { content: "\\eb8b" }
	   .codicon-debug-breakpoint-unsupported:before { content: "\\eb8c" }
	   .codicon-symbol-string:before { content: "\\eb8d" }
	   .codicon-debug-reverse-continue:before { content: "\\eb8e" }
	   .codicon-debug-step-back:before { content: "\\eb8f" }
	   .codicon-debug-restart-frame:before { content: "\\eb90" }
	   .codicon-debug-alt:before { content: "\\eb91" }
	   .codicon-call-incoming:before { content: "\\eb92" }
	   .codicon-call-outgoing:before { content: "\\eb93" }
	   .codicon-menu:before { content: "\\eb94" }
	   .codicon-expand-all:before { content: "\\eb95" }
	   .codicon-feedback:before { content: "\\eb96" }
	   .codicon-group-by-ref-type:before { content: "\\eb97" }
	   .codicon-ungroup-by-ref-type:before { content: "\\eb98" }
	   .codicon-account:before { content: "\\eb99" }
	   .codicon-bell-dot:before { content: "\\eb9a" }
	   .codicon-debug-console:before { content: "\\eb9b" }
	   .codicon-library:before { content: "\\eb9c" }
	   .codicon-output:before { content: "\\eb9d" }
	   .codicon-run-all:before { content: "\\eb9e" }
	   .codicon-sync-ignored:before { content: "\\eb9f" }
	   .codicon-pinned:before { content: "\\eba0" }
	   .codicon-github-inverted:before { content: "\\eba1" }
	   .codicon-server-process:before { content: "\\eba2" }
	   .codicon-server-environment:before { content: "\\eba3" }
	   .codicon-pass:before { content: "\\eba4" }
	   .codicon-issue-closed:before { content: "\\eba4" }
	   .codicon-stop-circle:before { content: "\\eba5" }
	   .codicon-play-circle:before { content: "\\eba6" }
	   .codicon-record:before { content: "\\eba7" }
	   .codicon-debug-alt-small:before { content: "\\eba8" }
	   .codicon-vm-connect:before { content: "\\eba9" }
	   .codicon-cloud:before { content: "\\ebaa" }
	   .codicon-merge:before { content: "\\ebab" }
	   .codicon-export:before { content: "\\ebac" }
	   .codicon-graph-left:before { content: "\\ebad" }
	   .codicon-magnet:before { content: "\\ebae" }
	   .codicon-notebook:before { content: "\\ebaf" }
	   .codicon-redo:before { content: "\\ebb0" }
	   .codicon-check-all:before { content: "\\ebb1" }
	   .codicon-pinned-dirty:before { content: "\\ebb2" }
	   .codicon-pass-filled:before { content: "\\ebb3" }
	   .codicon-circle-large-filled:before { content: "\\ebb4" }
	   .codicon-circle-large:before { content: "\\ebb5" }
	   .codicon-circle-large-outline:before { content: "\\ebb5" }
	   .codicon-combine:before { content: "\\ebb6" }
	   .codicon-gather:before { content: "\\ebb6" }
	   .codicon-table:before { content: "\\ebb7" }
	   .codicon-variable-group:before { content: "\\ebb8" }
	   .codicon-type-hierarchy:before { content: "\\ebb9" }
	   .codicon-type-hierarchy-sub:before { content: "\\ebba" }
	   .codicon-type-hierarchy-super:before { content: "\\ebbb" }
	   .codicon-git-pull-request-create:before { content: "\\ebbc" }
	   .codicon-run-above:before { content: "\\ebbd" }
	   .codicon-run-below:before { content: "\\ebbe" }
	   .codicon-notebook-template:before { content: "\\ebbf" }
	   .codicon-debug-rerun:before { content: "\\ebc0" }
	   .codicon-workspace-trusted:before { content: "\\ebc1" }
	   .codicon-workspace-untrusted:before { content: "\\ebc2" }
	   .codicon-workspace-unknown:before { content: "\\ebc3" }
	   .codicon-terminal-cmd:before { content: "\\ebc4" }
	   .codicon-terminal-debian:before { content: "\\ebc5" }
	   .codicon-terminal-linux:before { content: "\\ebc6" }
	   .codicon-terminal-powershell:before { content: "\\ebc7" }
	   .codicon-terminal-tmux:before { content: "\\ebc8" }
	   .codicon-terminal-ubuntu:before { content: "\\ebc9" }
	   .codicon-terminal-bash:before { content: "\\ebca" }
	   .codicon-arrow-swap:before { content: "\\ebcb" }
	   .codicon-copy:before { content: "\\ebcc" }
	   .codicon-person-add:before { content: "\\ebcd" }
	   .codicon-filter-filled:before { content: "\\ebce" }
	   .codicon-wand:before { content: "\\ebcf" }
	   .codicon-debug-line-by-line:before { content: "\\ebd0" }
	   .codicon-inspect:before { content: "\\ebd1" }
	   .codicon-layers:before { content: "\\ebd2" }
	   .codicon-layers-dot:before { content: "\\ebd3" }
	   .codicon-layers-active:before { content: "\\ebd4" }
	   .codicon-compass:before { content: "\\ebd5" }
	   .codicon-compass-dot:before { content: "\\ebd6" }
	   .codicon-compass-active:before { content: "\\ebd7" }
	   .codicon-azure:before { content: "\\ebd8" }
	   .codicon-issue-draft:before { content: "\\ebd9" }
	   .codicon-git-pull-request-closed:before { content: "\\ebda" }
	   .codicon-git-pull-request-draft:before { content: "\\ebdb" }
	   .codicon-debug-all:before { content: "\\ebdc" }
	   .codicon-debug-coverage:before { content: "\\ebdd" }
	   .codicon-run-errors:before { content: "\\ebde" }
	   .codicon-folder-library:before { content: "\\ebdf" }
	   .codicon-debug-continue-small:before { content: "\\ebe0" }
	   .codicon-beaker-stop:before { content: "\\ebe1" }
	   .codicon-graph-line:before { content: "\\ebe2" }
	   .codicon-graph-scatter:before { content: "\\ebe3" }
	   .codicon-pie-chart:before { content: "\\ebe4" }
	   .codicon-bracket:before { content: "\\eb0f" }
	   .codicon-bracket-dot:before { content: "\\ebe5" }
	   .codicon-bracket-error:before { content: "\\ebe6" }
	   .codicon-lock-small:before { content: "\\ebe7" }
	   .codicon-azure-devops:before { content: "\\ebe8" }
	   .codicon-verified-filled:before { content: "\\ebe9" }
	   .codicon-newline:before { content: "\\ebea" }
	   .codicon-layout:before { content: "\\ebeb" }
	   .codicon-layout-activitybar-left:before { content: "\\ebec" }
	   .codicon-layout-activitybar-right:before { content: "\\ebed" }
	   .codicon-layout-panel-left:before { content: "\\ebee" }
	   .codicon-layout-panel-center:before { content: "\\ebef" }
	   .codicon-layout-panel-justify:before { content: "\\ebf0" }
	   .codicon-layout-panel-right:before { content: "\\ebf1" }
	   .codicon-layout-panel:before { content: "\\ebf2" }
	   .codicon-layout-sidebar-left:before { content: "\\ebf3" }
	   .codicon-layout-sidebar-right:before { content: "\\ebf4" }
	   .codicon-layout-statusbar:before { content: "\\ebf5" }
	   .codicon-layout-menubar:before { content: "\\ebf6" }
	   .codicon-layout-centered:before { content: "\\ebf7" }
	   .codicon-target:before { content: "\\ebf8" }
	   .codicon-indent:before { content: "\\ebf9" }
	   .codicon-record-small:before { content: "\\ebfa" }
	   .codicon-error-small:before { content: "\\ebfb" }
	   .codicon-terminal-decoration-error:before { content: "\\ebfb" }
	   .codicon-arrow-circle-down:before { content: "\\ebfc" }
	   .codicon-arrow-circle-left:before { content: "\\ebfd" }
	   .codicon-arrow-circle-right:before { content: "\\ebfe" }
	   .codicon-arrow-circle-up:before { content: "\\ebff" }
	   .codicon-layout-sidebar-right-off:before { content: "\\ec00" }
	   .codicon-layout-panel-off:before { content: "\\ec01" }
	   .codicon-layout-sidebar-left-off:before { content: "\\ec02" }
	   .codicon-blank:before { content: "\\ec03" }
	   .codicon-heart-filled:before { content: "\\ec04" }
	   .codicon-map:before { content: "\\ec05" }
	   .codicon-map-filled:before { content: "\\ec06" }
	   .codicon-circle-small:before { content: "\\ec07" }
	   .codicon-bell-slash:before { content: "\\ec08" }
	   .codicon-bell-slash-dot:before { content: "\\ec09" }
	   .codicon-comment-unresolved:before { content: "\\ec0a" }
	   .codicon-git-pull-request-go-to-changes:before { content: "\\ec0b" }
	   .codicon-git-pull-request-new-changes:before { content: "\\ec0c" }
	   .codicon-search-fuzzy:before { content: "\\ec0d" }
	   .codicon-comment-draft:before { content: "\\ec0e" }
	   .codicon-send:before { content: "\\ec0f" }
	   .codicon-sparkle:before { content: "\\ec10" }
	   .codicon-insert:before { content: "\\ec11" }
	   `,
    });
    KoliBriDevHelper.patchTheme("itzbund", {
      GLOBAL: `:host {
				--border-color: var(--color-anthrazit);
				--border-radius: 0.125rem;
				--color-anthrazit: #333;
				--color-jade: #f3f7fb;
				--color-weiss: #fff;
				--color-petrol: #007a89;
				--color-achat: #0b4d59;
				--color-teal: #056773;
				--color-fluorit: #66ddec;
				--color-rotton: rgba(188, 0, 0, 1);
				--color-rotton-20: rgba(188, 0, 0, 0.2);
				--color-gras: #138510;
				--color-warn: #f0541e;
				--color-blut: var(--color-rotton);
				--color-input-bg-default: #e8edf2;
				--gradient-petrol-achat: linear-gradient(
					67deg,
					var(--color-petrol),
					var(--color-achat)
				);
				--color-citrin: #d4c912;
				--color-umber: #494500;
				--color-gelb: #fff443;
				--color-lichtgelb: #eeff6c;
				--gradient-gelb-citrin: linear-gradient(
					67deg,
					var(--color-gelb),
					var(--color-citrin)
				);
				--font-family-sans: BundesSans Web;
				--font-family-serif: BundesSerif Web;
				--font-size: 16px;
				--spacing: 0.125em;
				--kolibri-spacing: calc(2 * var(--spacing));
			}
			:host {
				font-family: var(--font-family); /* font-size: var(--font-size); */
			}
			* {
				box-sizing: border-box;
			}
			*:not(i) {
				font-family: var(--font-family);
			}
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				font-family: var(--font-family);
				font-size: var(--font-size);
				margin: 0;
				padding: 0;
			}
			*[tabindex]:focus,
			a:focus,
			button:focus,
			input:focus,
			select:focus,
			summary:focus,
			textarea:focus {
				cursor: pointer;
				outline-color: var(--color-petrol);
				outline-offset: 2px;
				outline-style: solid;
				outline-width: 3px;
				transition: outline-offset 0.2s linear;
			}
			kol-span-wc,
			kol-span-wc > span {
				gap: 0.25em;
			}
			kol-tooltip .area {
				background-color: #f2f2f2;
			}
			kol-tooltip #arrow {
				background-color: #626262;
			}
			kol-tooltip kol-span-wc {
				padding: 0.25rem 0.5rem;
				font-size: 0.875rem;
				line-height: 1.25rem;
				border-radius: 2px;
				border: 1px solid #626262;
			}`,
      "KOL-BUTTON": `button {
				background-color: transparent;
			}
			a,
			button {
				border-radius: 2rem !important;
				font-family: var(--font-family-sans);
				/* text-transform: uppercase; */
			}
			a > kol-span-wc,
			button > kol-span-wc {
				border-radius: 2rem;
				border-style: solid;
				min-width: 44px;
				min-height: 44px;
				border-width: var(--spacing);
				font-size: inherit; /*line-height: 1.25em;*/ /*padding: calc(4 * var(--spacing));*/
				padding: 0 1rem;
			}
			.button a.icon-only > kol-span-wc,
			.button button.icon-only > kol-span-wc {
				padding: 0 0.5rem;
			}
			a > kol-span-wc,
			button > kol-span-wc {
				gap: 0.25em;
				transition-delay: 0;
				transition-timing-function: ease-in-out;
				transition-duration: 0.5s;
				transition-property: background, color, border-color;
			}
			kol-link-wc.primary > a > kol-span-wc,
			kol-link-wc.primary > a:disabled:hover > kol-span-wc,
			button.primary > kol-span-wc,
			button.primary:disabled:hover > kol-span-wc {
				background-color: var(--color-petrol);
				border-color: var(--color-petrol);
				color: var(--color-weiss);
			}
			kol-link-wc.primary > a:hover > kol-span-wc,
			kol-link-wc.primary > a:focus > kol-span-wc,
			button.primary:hover > kol-span-wc,
			button.primary:focus > kol-span-wc {
				background-color: var(--color-achat);
				border-color: var(--color-achat);
			}
			kol-link-wc.secondary > a > kol-span-wc,
			kol-link-wc.secondary > a:disabled:hover > kol-span-wc,
			button.secondary > kol-span-wc,
			button.secondary:disabled:hover > kol-span-wc {
				background-color: var(--color-weiss);
				border-color: var(--color-petrol);
				color: var(--color-petrol);
			}
			kol-link-wc.secondary > a:hover > kol-span-wc,
			kol-link-wc.secondary > a:focus > kol-span-wc,
			button.secondary:hover > kol-span-wc,
			button.secondary:focus > kol-span-wc {
				background-color: var(--color-petrol);
				border-color: var(--color-petrol);
				color: var(--color-weiss);
			}
			kol-link-wc.normal > a > kol-span-wc,
			kol-link-wc.normal > a:disabled:hover > kol-span-wc,
			button.normal > kol-span-wc,
			button.normal:disabled:hover > kol-span-wc {
				background-color: var(--color-weiss);
				border-color: var(--color-anthrazit);
				color: var(--color-anthrazit);
			}
			kol-link-wc.normal > a:hover > kol-span-wc,
			kol-link-wc.normal > a:focus > kol-span-wc,
			button.normal:hover > kol-span-wc,
			button.normal:focus > kol-span-wc {
				background-color: var(--color-anthrazit);
				border-color: var(--color-anthrazit);
				color: var(--color-weiss);
			}
			kol-link-wc.danger > a > kol-span-wc,
			kol-link-wc.danger > a:disabled:hover > kol-span-wc,
			button.danger > kol-span-wc,
			button.danger:disabled:hover > kol-span-wc {
				background-color: var(--color-weiss);
				border-color: var(--color-blut);
				color: var(--color-blut);
			}
			kol-link-wc.danger > a:hover > kol-span-wc,
			kol-link-wc.danger > a:focus > kol-span-wc,
			button.danger:hover > kol-span-wc,
			button.danger:focus > kol-span-wc {
				background-color: var(--color-blut);
				border-color: var(--color-blut);
				color: var(--color-weiss);
			}
			kol-link-wc.ghost > a > kol-span-wc,
			kol-link-wc.ghost > a:disabled:hover > kol-span-wc,
			button.ghost > kol-span-wc,
			button.ghost:disabled:hover > kol-span-wc {
				background-color: var(--color-ghost);
				border-color: transparent;
				color: var(--color-anthrazit);
			}
			kol-link-wc.ghost > a:hover > kol-span-wc,
			kol-link-wc.ghost > a:focus > kol-span-wc,
			button.ghost:hover > kol-span-wc,
			button.ghost:focus > kol-span-wc {
				background-color: var(--color-ghost);
				border-color: var(--color-ghost);
				color: var(--color-anthrazit);
			}`,
      "KOL-BUTTON-GROUP": `:host > kol-button-group-wc {
				display: inline-flex;
				flex-wrap: wrap;
				gap: 0.25rem;
			}`,
      "KOL-LINK-BUTTON": `a,
			button {
				border-radius: 2rem !important;
				font-family: var(--font-family-sans);
				/* text-transform: uppercase; */
			}
			a > kol-span-wc,
			button > kol-span-wc {
				border-radius: 2rem;
				border-style: solid;
				min-width: 44px;
				min-height: 44px;
				border-width: var(--spacing);
				font-size: inherit; /*line-height: 1.25em;*/ /*padding: calc(4 * var(--spacing));*/
				padding: 0 1rem;
			}
			.button a.icon-only > kol-span-wc,
			.button button.icon-only > kol-span-wc {
				padding: 0 0.5rem;
			}
			a > kol-span-wc,
			button > kol-span-wc {
				gap: 0.25em;
				transition-delay: 0;
				transition-timing-function: ease-in-out;
				transition-duration: 0.5s;
				transition-property: background, color, border-color;
			}
			kol-link-wc.primary > a > kol-span-wc,
			kol-link-wc.primary > a:disabled:hover > kol-span-wc,
			button.primary > kol-span-wc,
			button.primary:disabled:hover > kol-span-wc {
				background-color: var(--color-petrol);
				border-color: var(--color-petrol);
				color: var(--color-weiss);
			}
			kol-link-wc.primary > a:hover > kol-span-wc,
			kol-link-wc.primary > a:focus > kol-span-wc,
			button.primary:hover > kol-span-wc,
			button.primary:focus > kol-span-wc {
				background-color: var(--color-achat);
				border-color: var(--color-achat);
			}
			kol-link-wc.secondary > a > kol-span-wc,
			kol-link-wc.secondary > a:disabled:hover > kol-span-wc,
			button.secondary > kol-span-wc,
			button.secondary:disabled:hover > kol-span-wc {
				background-color: var(--color-weiss);
				border-color: var(--color-petrol);
				color: var(--color-petrol);
			}
			kol-link-wc.secondary > a:hover > kol-span-wc,
			kol-link-wc.secondary > a:focus > kol-span-wc,
			button.secondary:hover > kol-span-wc,
			button.secondary:focus > kol-span-wc {
				background-color: var(--color-petrol);
				border-color: var(--color-petrol);
				color: var(--color-weiss);
			}
			kol-link-wc.normal > a > kol-span-wc,
			kol-link-wc.normal > a:disabled:hover > kol-span-wc,
			button.normal > kol-span-wc,
			button.normal:disabled:hover > kol-span-wc {
				background-color: var(--color-weiss);
				border-color: var(--color-anthrazit);
				color: var(--color-anthrazit);
			}
			kol-link-wc.normal > a:hover > kol-span-wc,
			kol-link-wc.normal > a:focus > kol-span-wc,
			button.normal:hover > kol-span-wc,
			button.normal:focus > kol-span-wc {
				background-color: var(--color-anthrazit);
				border-color: var(--color-anthrazit);
				color: var(--color-weiss);
			}
			kol-link-wc.danger > a > kol-span-wc,
			kol-link-wc.danger > a:disabled:hover > kol-span-wc,
			button.danger > kol-span-wc,
			button.danger:disabled:hover > kol-span-wc {
				background-color: var(--color-weiss);
				border-color: var(--color-blut);
				color: var(--color-blut);
			}
			kol-link-wc.danger > a:hover > kol-span-wc,
			kol-link-wc.danger > a:focus > kol-span-wc,
			button.danger:hover > kol-span-wc,
			button.danger:focus > kol-span-wc {
				background-color: var(--color-blut);
				border-color: var(--color-blut);
				color: var(--color-weiss);
			}
			kol-link-wc.ghost > a > kol-span-wc,
			kol-link-wc.ghost > a:disabled:hover > kol-span-wc,
			button.ghost > kol-span-wc,
			button.ghost:disabled:hover > kol-span-wc {
				background-color: var(--color-ghost);
				border-color: transparent;
				color: var(--color-anthrazit);
			}
			kol-link-wc.ghost > a:hover > kol-span-wc,
			kol-link-wc.ghost > a:focus > kol-span-wc,
			button.ghost:hover > kol-span-wc,
			button.ghost:focus > kol-span-wc {
				background-color: var(--color-ghost);
				border-color: var(--color-ghost);
				color: var(--color-anthrazit);
			}`,
      "KOL-PAGINATION": `:host {
				display: grid;
				gap: 1rem;
			}
			:host > div {
				display: inline-flex;
				flex-wrap: wrap;
				align-items: center;
				gap: 0.5em;
			}
			button > kol-span-wc {
				cursor: not-allowed;
				background-color: var(--color-achat);
				border-color: var(--color-achat);
				border-radius: 2rem;
				border-style: solid;
				color: var(--color-weiss);
				min-width: 44px;
				min-height: 44px;
				border-width: var(--spacing);
				font-size: inherit;
				font-weight: bold;
				line-height: 1.25em;
				padding: calc(4 * var(--spacing));
				text-decoration: underline;
			}`,
      "KOL-BUTTON-LINK": `kol-link-wc a,
			kol-button-wc button {
				text-decoration-line: none;
			}
			a,
			button {
				background-image: repeating-linear-gradient(to right, #66ddec, #66ddec);
				background-repeat: no-repeat;
				background-position: left 0 bottom 0;
				background-size: 25% 0.25ex;
				border-radius: var(--spacing);
				color: var(--color-petrol);
				font-family: var(--font-family-sans);
				font-size: inherit;
				/* text-transform: uppercase; */
				transition-delay: 0;
				transition-timing-function: ease-in-out;
				transition-duration: 0.5s;
				transition-property: background, color, border-color;
			}
			a:focus,
			a:hover,
			button:focus,
			button:hover {
				background-size: 100% 0.25ex;
				color: var(--color-achat);
			}
			a > kol-span-wc,
			button > kol-span-wc {
				gap: 0.25em;
			}
			.hidden {
				display: none;
				visibility: hidden;
			}
			a.skip {
				left: -99999px;
				overflow: hidden;
				position: absolute;
				z-index: 9999999;
			}
			a.skip:focus {
				background-color: white;
				box-shadow: 0 0 0.5rem 0.5rem white;
				left: unset;
				position: unset;
			}`,
      "KOL-INPUT-TEXT": `input:hover,
			input:focus {
				border-color: var(--border-color) !important;
				border-radius: none !important;
				outline-color: var(--color-achat) !important;
				outline-offset: 0;
				outline-style: solid;
				outline-width: 1px;
			}
			label {
				color: var(--color-anthrazit);
				font-size: 14px;
				line-height: 20px;
				gap: 8px;
				width: 100%;
				font-weight: bold;
			}
			input {
				cursor: pointer;
				width: 100%;
				color: var(--color-anthrazit);
				border-width: 1px;
				border-style: solid;
				border-color: var(--color-petrol);
				border-radius: 0;
				background-color: #e8edf2 !important;
				overflow: hidden;
				line-height: 24px;
				font-size: 16px;
			}
			.error input {
				background-color: var(--color-rotton-20) !important;
				border-color: var(--color-rotton) !important;
			}
			input:disabled {
				background-color: var(--color-input-bg-default);
				border-color: var(--border-color);
				cursor: not-allowed;
			}
			kol-alert {
				margin-top: calc(2 * var(--spacing));
				display: block;
			}
			.kol-required span::after {
				content: "*";
			}
			input::placeholder {
				font-style: italic;
			}`,
      "KOL-INPUT-PASSWORD": `input:hover,
			input:focus {
				border-color: var(--border-color) !important;
				border-radius: none !important;
				outline-color: var(--color-achat) !important;
				outline-offset: 0;
				outline-style: solid;
				outline-width: 1px;
			}
			label {
				color: var(--color-anthrazit);
				font-size: 14px;
				line-height: 20px;
				gap: 8px;
				width: 100%;
				font-weight: bold;
			}
			input {
				cursor: pointer;
				width: 100%;
				color: var(--color-anthrazit);
				border-width: 1px;
				border-style: solid;
				border-color: var(--color-petrol);
				border-radius: 0;
				background-color: #e8edf2 !important;
				overflow: hidden;
				line-height: 24px;
				font-size: 16px;
			}
			.error input {
				background-color: var(--color-rotton-20) !important;
				border-color: var(--color-rotton) !important;
			}
			input:disabled {
				background-color: var(--color-input-bg-default);
				border-color: var(--border-color);
				cursor: not-allowed;
			}
			kol-alert {
				margin-top: calc(2 * var(--spacing));
				display: block;
			}
			.kol-required span::after {
				content: "*";
			}
			input::placeholder {
				font-style: italic;
			}`,
      "KOL-INPUT-NUMBER": `input:hover,
			input:focus {
				border-color: var(--border-color) !important;
				border-radius: none !important;
				outline-color: var(--color-achat) !important;
				outline-offset: 0;
				outline-style: solid;
				outline-width: 1px;
			}
			label {
				color: var(--color-anthrazit);
				font-size: 14px;
				line-height: 20px;
				gap: 8px;
				width: 100%;
				font-weight: bold;
			}
			input {
				cursor: pointer;
				width: 100%;
				color: var(--color-anthrazit);
				border-width: 1px;
				border-style: solid;
				border-color: var(--color-petrol);
				border-radius: 0;
				background-color: #e8edf2 !important;
				overflow: hidden;
				line-height: 24px;
				font-size: 16px;
			}
			.error input {
				background-color: var(--color-rotton-20) !important;
				border-color: var(--color-rotton) !important;
			}
			input:disabled {
				background-color: var(--color-input-bg-default);
				border-color: var(--border-color);
				cursor: not-allowed;
			}
			kol-alert {
				margin-top: calc(2 * var(--spacing));
				display: block;
			}
			.kol-required span::after {
				content: "*";
			}
			input::placeholder {
				font-style: italic;
			}`,
      "KOL-INPUT-EMAIL": `input:hover,
			input:focus {
				border-color: var(--border-color) !important;
				border-radius: none !important;
				outline-color: var(--color-achat) !important;
				outline-offset: 0;
				outline-style: solid;
				outline-width: 1px;
			}
			label {
				color: var(--color-anthrazit);
				font-size: 14px;
				line-height: 20px;
				gap: 8px;
				width: 100%;
				font-weight: bold;
			}
			input {
				cursor: pointer;
				width: 100%;
				color: var(--color-anthrazit);
				border-width: 1px;
				border-style: solid;
				border-color: var(--color-petrol);
				border-radius: 0;
				background-color: #e8edf2 !important;
				overflow: hidden;
				line-height: 24px;
				font-size: 16px;
			}
			.error input {
				background-color: var(--color-rotton-20) !important;
				border-color: var(--color-rotton) !important;
			}
			input:disabled {
				background-color: var(--color-input-bg-default);
				border-color: var(--border-color);
				cursor: not-allowed;
			}
			kol-alert {
				margin-top: calc(2 * var(--spacing));
				display: block;
			}
			.kol-required span::after {
				content: "*";
			}
			input::placeholder {
				font-style: italic;
			}`,
      "KOL-INPUT-FILE": `input:hover,
			input:focus {
				border-color: var(--border-color) !important;
				border-radius: none !important;
				outline-color: var(--color-achat) !important;
				outline-offset: 0;
				outline-style: solid;
				outline-width: 1px;
			}
			label {
				color: var(--color-anthrazit);
				font-size: 14px;
				line-height: 20px;
				gap: 8px;
				width: 100%;
				font-weight: bold;
			}
			input {
				cursor: pointer;
				width: 100%;
				color: var(--color-anthrazit);
				border-width: 1px;
				border-style: solid;
				border-color: var(--color-petrol);
				border-radius: 0;
				background-color: #e8edf2 !important;
				overflow: hidden;
				line-height: 24px;
				font-size: 16px;
			}
			.error input {
				background-color: var(--color-rotton-20) !important;
				border-color: var(--color-rotton) !important;
			}
			input:disabled {
				background-color: var(--color-input-bg-default);
				border-color: var(--border-color);
				cursor: not-allowed;
			}
			kol-alert {
				margin-top: calc(2 * var(--spacing));
				display: block;
			}
			.kol-required span::after {
				content: "*";
			}
			input::placeholder {
				font-style: italic;
			}`,
      "KOL-TEXTAREA": `textarea:hover,
			textarea:focus {
				border-color: var(--default-border-hover);
				outline-color: var(--primary) !important;
				outline-offset: 0;
				outline-style: solid;
				outline-width: 1px;
			}
			label {
				color: var(--default-letter);
				font-size: 14px;
				line-height: 20px;
				gap: 8px;
				width: 100%;
				font-weight: bold;
			}
			textarea.error {
				background-color: var(--danger-light) !important;
				border-color: var(--danger);
			}
			textarea {
				width: 100%;
				color: var(--default-letter);
				border-width: 1px;
				border-style: solid;
				line-height: 24px;
				font-size: 16px;
				border-color: var(--kolibri-color-normal);
				border-radius: 0;
				background-color: #e8edf2 !important;
			}
			textarea::placeholder {
				color: var(--default-border);
			}
			textarea:read-only,
			textarea:disabled {
				cursor: not-allowed;
				border-color: var(--border-default);
				background-color: var(--background-light-grey);
			}
			.kol-required span::after {
				content: "*";
			}
			kol-alert {
				margin-top: var(--spacing);
				display: block;
			}`,
      "KOL-ALERT": `:host {
				--kolibri-border-width: 1px;
			}
			:host .default {
				border-color: var(--color-anthrazit);
			}
			.default .heading-icon {
				background-color: var(--color-anthrazit);
			}
			:host .error {
				border-color: var(--color-rotton);
			}
			.error .heading-icon {
				background-color: var(--color-rotton);
			}
			:host .info {
				border-color: var(--color-petrol);
			}
			.info .heading-icon {
				background-color: var(--color-petrol);
			}
			:host .success {
				border-color: var(--color-gras);
			}
			:host .success .heading-icon {
				background-color: var(--color-gras);
			}
			:host .warning {
				border-color: var(--color-warn);
			}
			.warning .heading-icon {
				background-color: var(--color-warn);
			}`,
      "KOL-HEADING": `h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				line-height: 1em;
				margin: 0;
				padding: 0;
			}
			h1 {
				font-family: var(--font-family-serif);
				font-size: 54px;
				font-weight: bold;
			}
			h2 {
				font-family: var(--font-family-serif);
				font-size: 32px;
				font-weight: bold;
			}
			h3 {
				font-family: var(--font-family-serif);
				font-size: 26px;
				font-weight: bold;
			}
			h4 {
				font-family: var(--font-family-serif);
				font-size: 20px;
				font-weight: normal;
			}
			h5 {
				font-family: var(--font-family-serif);
				font-size: 17px;
				font-weight: bold;
			}
			h6 {
				font-family: var(--font-family-sans);
				font-size: 17px;
				font-weight: normal;
			}`,
      "KOL-BADGE": `:host {
				display: inline-block;
			}
			:host > span {
				border-radius: 0.3125rem;
				display: inline-flex;
				line-height: 1.25rem;
			}
			:host > span kol-button-wc {
				border-left: 1px solid rgba(0, 0, 0, 0.25);
			}
			:host > span kol-span-wc {
				padding: 0.25rem 0.5rem;
			}
			:host > span > kol-span-wc {
				align-items: center;
				font-style: normal;
				gap: 0.5rem;
			}
			:host > span > kol-span-wc > span {
				display: flex;
				gap: 0.25rem;
			}
			:host button {
				border-radius: 0 var(--spacing) var(--spacing) 0;
			}`,
      "KOL-INDENTED-TEXT": `:host > div {
				background: var(--color-white);
				border-left: none;
				box-shadow: -4px 0px 0px var(--color-petrol);
				padding: 0.25em 0.5em;
				width: 100%;
			}`,
      "KOL-LINK": `kol-link-wc a,
			kol-button-wc button {
				text-decoration-line: none;
			}
			a,
			button {
				background-image: repeating-linear-gradient(to right, #66ddec, #66ddec);
				background-repeat: no-repeat;
				background-position: left 0 bottom 0;
				background-size: 25% 0.25ex;
				border-radius: var(--spacing);
				color: var(--color-petrol);
				font-family: var(--font-family-sans);
				font-size: inherit;
				/* text-transform: uppercase; */
				transition-delay: 0;
				transition-timing-function: ease-in-out;
				transition-duration: 0.5s;
				transition-property: background, color, border-color;
			}
			a:focus,
			a:hover,
			button:focus,
			button:hover {
				background-size: 100% 0.25ex;
				color: var(--color-achat);
			}
			a > kol-span-wc,
			button > kol-span-wc {
				gap: 0.25em;
			}
			.hidden {
				display: none;
				visibility: hidden;
			}
			a.skip {
				left: -99999px;
				overflow: hidden;
				position: absolute;
				z-index: 9999999;
			}
			a.skip:focus {
				background-color: white;
				box-shadow: 0 0 0.5rem 0.5rem white;
				left: unset;
				position: unset;
			}`,
      "KOL-BREADCRUMB": `li > span {
				font-weight: bold;
				/* text-transform: uppercase; */
			}`,
      "KOL-SPIN": `.spin {
				display: inline-block;
				height: 1rem;
				position: relative;
				width: 3rem;
			}
			.spin span {
				animation-timing-function: cubic-bezier(0, 1, 1, 0);
				border: 0.1rem solid rgb(255, 255, 255);
				border-radius: 50%;
				height: 0.8rem;
				width: 0.8rem;
				top: 0.1rem;
				position: absolute;
			}
			.spin span:nth-child(1) {
				background-color: #fc0;
				z-index: 0;
				animation: 2s ease 0s infinite normal none running spin1;
				left: 0.1rem;
			}
			.spin span:nth-child(2) {
				background-color: #f00;
				z-index: 1;
				animation: 2s ease 0s infinite normal none running spin2;
				left: 0.1rem;
			}
			.spin span:nth-child(3) {
				background-color: #000;
				z-index: 1;
				animation: 2s ease 0s infinite normal none running spin2;
				left: 1.1rem;
			}
			.spin span:nth-child(4) {
				background-color: #666;
				z-index: 0;
				animation: 2s ease 0s infinite normal none running spin3;
				left: 2.1rem;
			}
			@keyframes spin1 {
				0% {
					transform: scale(0);
				}
				100% {
					transform: scale(1);
				}
			}
			@keyframes spin2 {
				0% {
					transform: translate(0px, 0px);
				}
				100% {
					transform: translate(1rem, 0px);
				}
			}
			@keyframes spin3 {
				0% {
					transform: scale(1);
				}
				100% {
					transform: scale(0);
				}
			}`,
      "KOL-PROGRESS": `:host progress,
			:host span {
				display: block;
				height: 0px;
				overflow: hidden;
				width: 0px;
			}
			svg line:first-child,
			svg circle:first-child {
				fill: transparent;
				stroke: var(--color-fluorit);
			}
			svg line:last-child,
			svg circle:last-child {
				stroke: var(--color-achat);
				fill: transparent;
			}
			progress {
				display: none;
			}`,
      "KOL-SELECT": `select:hover,
			select:focus {
				border-color: var(--default-border-hover);
				outline-color: var(--primary) !important;
				outline-offset: 0;
				outline-style: solid;
				outline-width: 1px;
			}
			label {
				color: var(--default-letter);
				font-size: 14px;
				line-height: 20px;
				gap: 8px;
				width: 100%;
				font-weight: bold;
			}
			select.error {
				background-color: var(--danger-light) !important;
				border-color: var(--danger);
			}
			select {
				width: 100%;
				color: var(--default-letter);
				border-width: 1px;
				border-style: solid;
				line-height: 24px;
				font-size: 16px;
				border-color: var(--kolibri-color-normal);
				border-radius: 0;
				background-color: #e8edf2 !important;
			}
			select:disabled {
				cursor: not-allowed;
				border-color: var(--border-default);
				background-color: var(--background-light-grey);
			}
			option {
				height: 2em;
				padding: 0.5em;
			}
			kol-alert {
				margin-top: var(--spacing);
				display: block;
			}
			.kol-required span::after {
				content: "*";
			}`,
      "KOL-INPUT-COLOR": `input:hover,
			input:focus {
				border-color: var(--border-color) !important;
				border-radius: none !important;
				outline-color: var(--color-achat) !important;
				outline-offset: 0;
				outline-style: solid;
				outline-width: 1px;
			}
			label {
				color: var(--color-anthrazit);
				font-size: 14px;
				line-height: 20px;
				gap: 8px;
				width: 100%;
				font-weight: bold;
			}
			input {
				cursor: pointer;
				width: 100%;
				color: var(--color-anthrazit);
				border-width: 1px;
				border-style: solid;
				border-color: var(--color-petrol);
				border-radius: 0;
				background-color: #e8edf2 !important;
				overflow: hidden;
				line-height: 24px;
				font-size: 16px;
			}
			.error input {
				background-color: var(--color-rotton-20) !important;
				border-color: var(--color-rotton) !important;
			}
			input:disabled {
				background-color: var(--color-input-bg-default);
				border-color: var(--border-color);
				cursor: not-allowed;
			}
			kol-alert {
				margin-top: calc(2 * var(--spacing));
				display: block;
			}
			.kol-required span::after {
				content: "*";
			}
			input::placeholder {
				font-style: italic;
			}`,
      "KOL-ACCORDION": `:host > div {
				font-family: var(--font-family);
				box-sizing: border-box;
				width: 100%;
				height: 100%;
				display: grid;
				border-color: var(--kolibri-border-color);
				border-width: 1px;
				border-style: solid;
				border-radius: 0.25rem;
			}
			:host > div > kol-heading-wc {
				font-weight: 700;
				font-size: 1.25rem;
				line-height: 1.75rem;
			}
			:host > div > kol-heading-wc button {
				cursor: pointer;
				width: 100%;
				margin: 0;
				display: flex;
				gap: 0.5em;
				border: 0;
				align-items: center;
				overflow: hidden;
				font-size: inherit;
				line-height: 1.75em;
				background-color: transparent;
				padding: 0.5rem;
			}
			:host > div[part*="open"] > kol-heading-wc button {
				padding-bottom: 0;
			}
			:host > div[part*="open"] > kol-heading-wc button kol-icon {
				width: 1em;
			}
			:host > div div[part="header"],
			:host > div[part*="open"] div[part="content"] {
				margin: 0;
			}
			:host > div div[part="header"] {
				padding-left: 2rem;
			}
			:host > div[part*="open"] div[part="content"] {
				margin: 0;
				padding: 0 1rem 1rem 2.25rem;
			}
			:host > div > kol-heading-wc button kol-icon::part(icon) {
				color: var(--color-midnight);
			}
			button {
				cursor: pointer;
				font-weight: inherit;
				font-size: inherit;
				line-height: inherit;
			}
			:host > div > kol-heading-wc button kol-icon::part(close)::before {
				font-family: "Font Awesome 6 Free";
				content: "\\f077";
			}
			:host > div > kol-heading-wc button kol-icon::part(open)::before {
				font-family: "Font Awesome 6 Free";
				content: "\\f078";
			}`,
      "KOL-TABLE": `:host > div {
				overflow-x: auto;
				overflow-y: hidden;
			}
			:host > div:first-child {
				border-style: solid;
				border-width: 1px;
				border-color: var(--border-color);
			}
			table {
				width: 100%;
				border-collapse: collapse;
				border-spacing: 0;
			}
			table,
			tr,
			th,
			td {
				border: 0 solid var(--border-color);
			}
			tr {
				border-top-width: 1px;
			}
			tr:nth-child(even) {
				background-color: #f2f2f2;
			}
			th,
			td {
				border-right-width: 1px;
				padding: 0.25em 0.5em;
			}
			th {
				background-color: #eee;
			}
			th > div {
				display: grid;
				grid-template-columns: 1fr auto;
				align-items: center;
				gap: 0.25em;
			}
			:host > div.pagination {
				padding: 0.5em;
			}
			:host > div.pagination,
			:host > div.pagination > div:last-child {
				display: grid;
				align-items: center;
				justify-items: center;
				gap: 0.5em;
			}
			@media (min-width: 1024px) {
				:host > div.pagination,
				:host > div.pagination > div:last-child {
					grid-auto-flow: column;
				}
				:host > div.pagination kol-pagination {
					display: flex;
					gap: 1rem;
				}
			}`,
      "KOL-NAV": `:host .hidden {
				display: none;
			}
			:host > div > nav ul {
				list-style: none;
				margin: 0px;
				padding: 0px;
				border-radius: var(--border-radius);
				background-color: var(--color-petrol);
			}
			:host > div > nav ul > li {
				border-radius: var(--border-radius);
				overflow: hidden;
				padding: 0.125em;
			}
			:host > div > nav ul > li[part*="vertical"] + li {
				border-radius: 0;
				border-top: 0.1em dotted white;
			}
			:host > div > nav ul > li[part*="vertical selected"] {
				border-right: 0.375em solid var(--color-citrin);
			}
			:host > div > nav ul > li[part*="horizontal"] + li {
				border-radius: 0;
				border-left: 0.1em dotted white;
			}
			:host > div > nav ul > li[part*="horizontal selected"] {
				border-bottom: 0.375em solid var(--color-citrin);
			}
			:host > div > nav ul > li > div {
				height: 100%;
			}
			:host > div > nav kol-link-wc {
				width: 100%; /*height: 100%;font-weight: 600;*/
				display: block;
			}
			:host > div > nav kol-link-wc a {
				border-radius: var(--border-radius);
				background-color: var(--color-petrol);
				border: 1px solid transparent;
				grid: flex;
				line-height: 2em;
				padding: 0.5em;
				color: white;
				height: 100%;
				-webkit-box-align: center;
				align-items: center;
				display: flex;
				cursor: pointer;
				text-decoration: inherit;
			}
			:host > div > nav kol-link-wc[exportparts*="selected"] a {
				background-color: var(--color-achat);
				font-weight: 700;
			}
			:host > div > nav kol-link-wc a kol-icon.mr-2 {
				margin-right: calc(2 * 2 * var(--spacing));
			}
			:host > div > nav kol-link-wc a kol-icon.ml-2 {
				margin-left: calc(2 * 2 * var(--spacing));
			}
			:host > div > nav kol-link-wc a:focus,
			:host > div > nav kol-link-wc a:hover {
				border: 1px solid white;
				background-color: var(--color-fluorit);
				color: var(--color-anthrazit);
			} /* compact button */
			:host > div > div:last-child {
				margin-top: 0.5em;
				width: 100%;
				text-align: center;
			}
			:host > div > nav kol-link-wc a.text-center {
				display: grid;
				align-items: center;
				justify-items: center;
			} /* horizontal */
			ul.flex {
				display: flex;
			}
			li > div > div.absolute {
				position: absolute;
			}
			kol-span-wc {
				justify-items: baseline;
			}`,
      "KOL-CARD": `:host > div {
				background-color: white;
				border-color: var(--border-color);
				border-style: solid;
				border-width: 1px;
				border-radius: calc(2 * var(--border-radius));
				width: 100%;
				height: 100%;
				overflow: hidden;
			}
			kol-heading {
				padding: 0.5rem;
				display: block;
				border-bottom-style: solid;
				border-bottom-color: var(--border-color);
				border-bottom-width: 1px;
			}
			:host > div > div {
				display: block;
				padding: 0.5rem;
			}
			:host > div > div:last-child {
				display: block;
				padding: 0.5rem;
				border-top-style: solid;
				border-top-color: var(--color-achat);
				border-top-width: 1px;
			}`,
      "KOL-INPUT-CHECKBOX": `/* ALL INPUT, SELECT, TEXTAREA */
			label {
				cursor: pointer;
			}
			input {
				color: var(--default-letter);
				border-color: var(--default-border);
				border-width: 2px;
				border-style: solid;
				line-height: 24px;
				font-size: 16px;
			}
			.required label > span::after {
				content: "*";
				padding-left: 0.125em;
			}
			input:hover {
				border-color: var(--color-petrol);
			} /* NEU */
			kol-input {
				display: grid;
				align-items: center;
				justify-items: left;
				width: 100%;
			}
			kol-input.default {
				grid-template-columns: calc(6 * 2 * var(--spacing)) auto;
			}
			kol-input.switch {
				grid-template-columns: calc(13 * 2 * var(--spacing)) auto;
			}
			kol-input > div.input {
				display: inline-flex;
				order: 1;
			}
			kol-input > div.input input {
				margin: 0px;
			}
			kol-input > label {
				order: 2;
				padding-left: calc(2 * 2 * var(--spacing));
			}
			kol-input > kol-alert.error {
				order: 3;
				padding-top: 0.25em;
				grid-column: span 2 / auto;
			} /* CHECKBOX */
			input[type="checkbox"] {
				appearance: none;
				background-color: white;
				cursor: pointer;
				transition: 0.5s;
			}
			input[type="checkbox"].kol-disabled:before {
				cursor: not-allowed;
			}
			input[type="checkbox"]:before {
				content: "";
				cursor: pointer;
			}
			input[type="checkbox"]:checked {
				background-color: var(--color-petrol);
				border-color: var(--color-petrol);
			}
			.default input[type="checkbox"] {
				/* border-radius: 0.25em; */
				height: calc(6 * 2 * var(--spacing));
				min-width: calc(6 * 2 * var(--spacing));
				width: calc(6 * 2 * var(--spacing));
			}
			.default input[type="checkbox"]:before {
				/* border-radius: 0.25em; */
				background-color: transparent;
				display: block;
				height: calc(6 * 2 * var(--spacing));
				position: relative;
				width: calc(6 * 2 * var(--spacing));
			}
			.default input[type="checkbox"]:checked:before {
				border-right-width: 3px;
				border-bottom-width: 3px;
				left: calc(1.5 * 2 * var(--spacing) - 2px);
				top: calc(2.85 * 2 * var(--spacing) - 2px);
				transform: rotate(40deg) translate(-50%, -50%);
				background-color: transparent;
				border-width: 0px 3px 3px 0px;
				border-color: white;
				border-radius: 1px;
				border-style: solid;
				height: calc(3 * 2 * var(--spacing));
				width: calc(1.5 * 2 * var(--spacing));
			}
			.default input[type="checkbox"]:indeterminate:before {
				background-color: var(--kolibri-color-normal);
				height: 0.375rem;
				top: 0.45rem;
				left: 0.15rem;
				width: calc(4 * 2 * var(--spacing));
			}
			.switch input[type="checkbox"] {
				/* border-radius: 0.25em; */
				min-width: 3.2em;
				width: 3.2em;
				height: 1.7em;
				display: inline-block;
				position: relative;
			}
			.switch input[type="checkbox"]:before {
				/* border-radius: 0.25em; */
				-webkit-transition: 0.5s;
				-moz-transition: 0.5s;
				-ms-transition: 0.5s;
				transition: 0.5;
				width: 1.2em;
				height: 1.2em;
				left: calc(0.25em - 2px);
				top: calc(0.25em - 2px);
				background-color: black;
				position: absolute;
			}
			.switch input[type="checkbox"]:checked:before {
				-webkit-transform: translateX(1.5em);
				-moz-transform: translateX(1.5em);
				-ms-transform: translateX(1.5em);
				transform: translateX(1.5em);
				background-color: white;
			}
			.switch input[type="checkbox"]:indeterminate:before {
				-webkit-transform: translateX(0.75em);
				-moz-transform: translateX(0.75em);
				-ms-transform: translateX(0.75em);
				transform: translateX(0.75em);
				background-color: var(--color-petrol);
			}
			.disabled {
				opacity: 0.33;
			}
			.default kol-icon,
			.switch kol-icon {
				display: none;
			}
			kol-input span.hint {
				grid-column: span 2;
				font-style: italic;
				color: gray;
				display: block;
				order: 3;
				padding: 0 var(--spacing);
			}`,
      "KOL-INPUT-RADIO": `/* INPUT */
			:host input:focus {
				outline-color: var(--color-achat) !important;
				outline-offset: 2px;
				outline-style: solid;
				outline-width: 3px;
			}
			label {
				color: var(--color-anthrazit);
				font-size: 14px;
				line-height: 20px;
				gap: 8px;
				width: 100%;
			}
			input {
				width: 100%;
				color: var(--color-anthrazit);
				border-color: var(--default-border);
				border-width: 2px;
				border-style: solid;
				border-radius: 5px; /* padding: 10px 14px; */
				line-height: 24px;
				font-size: 16px;
			}
			input:hover {
				border-color: var(--color-achat);
			}
			kol-alert {
				display: block;
				width: 100%;
			}
			.kol-required span::after {
				content: "*";
			} /* RADIO */
			fieldset {
				border: 0px;
				margin: 0px;
				padding: 0px;
				display: grid;
				gap: 0.25em;
			}
			fieldset legend {
				display: block;
				width: 100%;
				line-height: 1.5em;
			}
			fieldset div {
				cursor: pointer;
				display: flex;
				flex-direction: row;
				gap: 0.5em;
				margin-top: 0.25em;
				margin-bottom: 0.25em;
				align-items: center;
				position: relative;
			}
			fieldset div label {
				cursor: pointer;
				display: flex;
				width: 100%;
			}
			fieldset div label span {
				margin-top: 0.125em;
			}
			fieldset div input[type="radio"] {
				appearance: none;
				transition: 0.5s;
				border-radius: 100%;
				height: calc(6 * 2 * var(--spacing));
				min-width: calc(6 * 2 * var(--spacing));
				width: calc(6 * 2 * var(--spacing));
			}
			fieldset div input[type="radio"]:checked:before {
				box-shadow: 0 0 0.1rem black;
				background-color: var(--color-petrol);
			}
			fieldset div input[type="radio"]:disabled {
				background-color: var(--color-input-bg-default);
				border-color: #999;
				cursor: not-allowed;
			}`,
      "KOL-TOAST": `:host > div {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 0;
				z-index: 200;
			}
			:host > div > kol-alert {
				display: block;
				margin: auto;
				padding: 1rem;
				max-width: 750px;
			}
			:host > div > kol-button-wc {
				top: 0;
				position: relative;
				display: block;
				margin: auto;
				width: 1em;
			}`,
      "KOL-TABS": `:host > div {
				display: block;
				width: 100%;
			}
			:host kol-button-group-wc {
				display: flex;
				background-color: var(--color-petrol);
			}
			:host kol-button-group-wc > div {
				display: inline-flex;
			}
			:host kol-button-group-wc > div + div {
				margin-left: 0.25em;
			}
			:host > div > div {
				padding: 0.25em;
				border: 1px solid var(--border-color);
			}
			button {
				box-sizing: border-box;
				font-size: inherit;
				line-height: 1.25em;
				cursor: pointer;
				border-width: 2px;
				box-shadow: 0 0 0.25em gray;
				width: inherit;
				overflow: hidden;
				border-style: solid;
				padding: calc(4 * var(--spacing));
				display: grid;
				gap: 0.25em;
				align-items: center;
				justify-content: center;
				text-align: center;
				transition-duration: 0.5s;
				transition-property: background-color, color, border-color;
			}
			kol-button-wc button.selected,
			kol-button-wc[aria-selected="true"] button {
				background-color: white;
				border-bottom-width: 0.25em !important;
				border-bottom-style: solid;
				border-bottom-color: var(--color-citrin) !important;
			}
			button > kol-span-wc span {
				display: flex;
				gap: 0.25em;
				align-items: center;
				justify-content: center;
			}
			button:disabled {
				cursor: not-allowed;
				opacity: 0.5;
			}
			button.primary,
			button.primary:disabled:hover {
				background-color: var(--kolibri-color-primary);
				border-color: var(--kolibri-color-primary);
				color: white;
			}
			button.primary:hover,
			button.primary:focus {
				color: var(--kolibri-color-primary);
			}
			button.secondary,
			button.secondary:disabled:hover {
				background-color: var(--kolibri-color-secondary);
				border-color: var(--kolibri-color-secondary);
				color: white;
			}
			button.secondary:hover,
			button.secondary:focus {
				color: var(--kolibri-color-secondary);
			}
			button.normal,
			button.normal:disabled:hover {
				background-color: var(--color-petrol);
				border-color: var(--color-petrol);
				color: white;
			}
			button.normal:hover,
			button.normal:focus {
				color: var(--color-petrol);
			}
			button.danger,
			button.danger:disabled:hover {
				background-color: var(--kolibri-color-danger);
				border-color: var(--kolibri-color-danger);
				color: white;
			}
			button.danger:hover,
			button.danger:focus {
				color: var(--kolibri-color-danger);
			}
			button.ghost,
			button.ghost:disabled:hover {
				background-color: white;
				border-color: var(--kolibri-color-ghost);
				color: var(--kolibri-color-ghost);
			}
			button.ghost:hover,
			button.ghost:focus {
				background-color: var(--kolibri-color-ghost);
				color: white;
			}
			button:hover,
			button:focus {
				background-color: white;
				box-shadow: 0 0 0.25em black;
			}
			button:active {
				outline: 0 !important;
				box-shadow: none !important;
			}
			.close-button {
				font-size: 25%;
				height: fit-content;
				width: 0;
			}
			.close-button button {
				width: 1rem;
				position: relative;
				height: 1rem;
				left: -4.25em;
				top: 0.25em;
			}
			:host > div {
				display: grid;
			}
			:host > div.tabs-align-left {
				grid-template-columns: auto 1fr;
			}
			:host > div.tabs-align-right {
				grid-template-columns: 1fr auto;
			}
			:host > .tabs-align-left kol-button-group-wc,
			:host > .tabs-align-top kol-button-group-wc {
				order: 0;
			}
			:host > .tabs-align-bottom kol-button-group-wc,
			:host > .tabs-align-right kol-button-group-wc {
				order: 1;
			}
			:host > div.tabs-align-left kol-button-group-wc > div,
			:host > div.tabs-align-left kol-button-group-wc > div > div,
			:host > div.tabs-align-right kol-button-group-wc > div,
			:host > div.tabs-align-right kol-button-group-wc > div > div {
				display: grid;
			}
			:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
			:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
				width: 100%;
			}
			:host > div.tabs-align-bottom kol-button-group-wc div,
			:host > div.tabs-align-top kol-button-group-wc div {
				display: flex;
				flex-wrap: wrap;
			}`,
    });
    document.body.dataset.theme = "itzbund";
  })
  .catch(() => console.warn);
