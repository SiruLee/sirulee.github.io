---
title: Quantum Amplitude Amplification and Estimation
author: jiheon_lee
description: Paper by Brassard, Hoyer, Mosca, and Tapp (2000)
date: 2024-05-05 10:40:00 -0400
categories: [Paper Reading, Physics]
tags: [Quantum Physics, Quantum Simulation]
math: true
toc: true
---

## Introduction
> _Amplitude amplification_ is a process that allows to find a good $x$ after an expected number of applications of $\mathcal{A}$ and its inverse which is proportional to $1/\sqrt{a}$, assuming algorithm $\mathcal{A}$ makes no measurement (Brassard, et al., 2000)

Intuitively, the classical probabilistic paradigm would increase the probability of success by a constant on each iteration. This results in $1/N$ iterations on average to find success. In contrast, quantum amplitude amplification increases the _amplitude_ of success by a constant on each iteration. Since amplitudes correspond to square root of probabilities, this would result in approximately $1/\sqrt{\alpha}$ times to find success, where $\alpha$ is the probability that a quantum state is measured and turns out to be a success.

