---
title: Diagonalization of Pauli XX + Pauli YY
author: jiheon_lee
description: Diagonalization of a mixture of tensor products of pauli X and pauli Y by finding a common eigenbasis
date: 2024-05-28 22:35:00 -0400
categories: [Topic Study, Physics Topic]
tags: [Quantum Information, Quantum Simulation]
math: true
toc: true
---
## Illustration of Problem
Given
$$
\begin{equation}
H = \sigma_X \otimes \sigma_X + \sigma_Y \otimes \sigma_Y,
\end{equation}
$$
diagonalize the whole thing so that we can build a simulation circuit that does not split the two terms.