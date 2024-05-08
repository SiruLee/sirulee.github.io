---
title: Quantum Amplitude Amplification and Estimation
author: jiheon_lee
description: Paper by Brassard, Hoyer, Mosca, and Tapp (2000)
date: 2024-05-05 10:40:00 -0400
categories: [Paper Reading, Physics-PR]
tags: [Quantum Physics, Quantum Simulation]
math: true
toc: true
---

## Introduction
> _Amplitude amplification_ is a process that allows to find a good $x$ after an expected number of applications of $\mathcal{A}$ and its inverse which is proportional to $1/\sqrt{a}$, assuming algorithm $\mathcal{A}$ makes no measurement (Brassard, et al., 2000)

Intuitively, the classical probabilistic paradigm would increase the probability of success by a constant on each iteration. This results in $1/N$ iterations on average to find success. In contrast, quantum amplitude amplification increases the _amplitude_ of success by a constant on each iteration. Since amplitudes correspond to square root of probabilities, this would result in approximately $1/\sqrt{\alpha}$ times to find success, where $\alpha$ is the probability that a quantum state is measured and turns out to be a success.

## Basics
First, define a boolean function $\chi : \mathbb{Z} \rightarrow \{0,1\}$ that partitions the Hilbert space $\mathcal{H}$ into a direct sum of two subspaces, a "good" subspace and a "bad" subspace.

#### The Good Subspace
The good subspace is the subspace spanned by the set of basis states $\ket{x}\in\mathcal{H}$ where $\chi(x) = 1$.
#### The Bad Subspace
The bad subspace is the subspace spanned by the set of basis states $\ket{x}\in\mathcal{H}$ where $\chi(x) = 0$.

#### Procedure
Note that every pure state $\ket{\Upsilon}\in\mathcal{H}$ has a unique decomposition as $\ket{\Upsilon} = \ket{\Upsilon_0} + \ket{\Upsilon_1}$ where $\ket{\Upsilon_0}$ is the projection onto the bad subspace and $\ket{\Upsilon_1}$ is the projection onto the good subspace. 

Let $\mathcal{A}$ be any quantum algorithm that acts on $\mathcal{H}$ without measurement. Let $\ket{\Psi} = \mathcal{A}\ket{0}$. The amplification process follows the repeated application of the unitary operator $$\mathcal{Q} = -\mathcal{A}\mathcal{S}_0\mathcal{A}^{-1}\mathcal{S}_\chi$$,
where $\mathcal{S}_0$ changes the sign of the amplitude if and only if the state is the zero state $\ket{0}$ and $\mathcal{S}_\chi$ changes the sign of the amplitude of the _good states_.